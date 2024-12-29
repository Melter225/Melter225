import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import { ThemeProvider } from "./theme.tsx";
import "./globals.css";

const poppins = Poppins({
  weight: ["100", "200", "300", "400", "500", "600", "700"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "Personal Portfolio",
  description: "My personal portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <ThemeProvider poppinsClass={poppins.className}>{children}</ThemeProvider>
    </html>
  );
}
