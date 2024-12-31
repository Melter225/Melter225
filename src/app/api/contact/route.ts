import sgMail from "@sendgrid/mail";
import { NextRequest, NextResponse } from "next/server";

sgMail.setApiKey(process.env.SENDGRID_API_KEY!);

export async function POST(req: NextRequest) {
  if (!process.env.SENDGRID_API_KEY || !process.env.EMAIL_USER) {
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

    const msg = {
      to: to,
      from: process.env.EMAIL_USER,
      reply_to: from || process.env.EMAIL_USER,
      subject: subject || "New Contact Form Submission",
      text: text,
    };

    await sgMail.send(msg);

    return NextResponse.json(
      { message: "Email sent successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error sending email:", error);
    // if ("response" in error) {
    //   const { message, code, response } = error;
    //   return NextResponse.json(
    //     { error: message, code, details: response?.body },
    //     { status: 500 }
    //   );
    // }
    return NextResponse.json(
      { error: "Failed to send email" },
      { status: 500 }
    );
  }
}
