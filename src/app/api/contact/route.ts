import axios, { AxiosError } from "axios";
import { NextRequest, NextResponse } from "next/server";

interface EmailAddress {
  address: string;
}

interface Recipient {
  emailAddress: EmailAddress;
}

interface MessageBody {
  contentType: "Text" | "HTML";
  content: string;
}

interface EmailMessage {
  message: {
    subject?: string;
    body: MessageBody;
    toRecipients: Recipient[];
    from?: {
      emailAddress: EmailAddress;
    };
  };
}

async function refreshAccessToken() {
  try {
    const response = await axios.post(
      `https://login.microsoftonline.com/${process.env.EMAIL_TENANT_ID}/oauth2/v2.0/token`,
      new URLSearchParams({
        client_id: process.env.EMAIL_CLIENT_ID!,
        client_secret: process.env.EMAIL_CLIENT_SECRET!,
        refresh_token: process.env.EMAIL_REFRESH_TOKEN!,
        grant_type: "refresh_token",
        scope: "https://graph.microsoft.com/Mail.Send",
      }).toString(),
      {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      }
    );

    return response.data.access_token;
  } catch (error: unknown) {
    console.error("Error refreshing token:", error);
    if (error instanceof AxiosError && error.response) {
      console.error("Response data:", error.response.data);
    }
    throw new Error("Failed to refresh access token");
  }
}

async function sendEmailWithRetry(
  emailMessage: EmailMessage,
  accessToken: string
) {
  try {
    await axios.post(
      `https://graph.microsoft.com/v1.0/users/${process.env.EMAIL_USER}/sendMail`,
      emailMessage,
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
          "Content-Type": "application/json",
          "X-AnchorMailbox": process.env.EMAIL_USER,
        },
      }
    );
  } catch (error: unknown) {
    if (error instanceof AxiosError && error.response?.status === 401) {
      const newToken = await refreshAccessToken();
      await axios.post(
        `https://graph.microsoft.com/v1.0/users/${process.env.EMAIL_USER}/sendMail`,
        emailMessage,
        {
          headers: {
            Authorization: `Bearer ${newToken}`,
            "Content-Type": "application/json",
            "X-AnchorMailbox": process.env.EMAIL_USER,
          },
        }
      );
      return newToken;
    }
    throw error;
  }
  return accessToken;
}

export async function POST(req: NextRequest) {
  if (
    !process.env.EMAIL_USER ||
    !process.env.EMAIL_CLIENT_ID ||
    !process.env.EMAIL_CLIENT_SECRET ||
    !process.env.EMAIL_ACCESS_TOKEN ||
    !process.env.EMAIL_REFRESH_TOKEN
  ) {
    console.error("Missing email configuration");
    return NextResponse.json(
      { error: "Server configuration error" },
      { status: 500 }
    );
  }

  try {
    const { from, to, subject, text } = await req.json();

    if (!to || !text) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    const emailMessage: EmailMessage = {
      message: {
        subject: subject || "New Contact Form Submission",
        body: {
          contentType: "Text",
          content: text,
        },
        toRecipients: [
          {
            emailAddress: {
              address: to,
            },
          },
        ],
      },
    };

    emailMessage.message.from = {
      emailAddress: {
        address: from,
      },
    };

    const currentToken = process.env.EMAIL_ACCESS_TOKEN;

    const newToken = await sendEmailWithRetry(emailMessage, currentToken!);

    if (newToken !== currentToken) {
      console.log("Token was refreshed during the request");
    }

    return NextResponse.json(
      { message: "Email sent successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error sending email:", error);

    if (error instanceof AxiosError && error.response?.data?.error) {
      return NextResponse.json(
        { error: error.response.data.error.message },
        { status: error.response.status }
      );
    }

    return NextResponse.json(
      { error: "Failed to send email" },
      { status: 500 }
    );
  }
}
