import type { Metadata } from "next";
import { Forum, Manrope } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";

const forum = Forum({
  variable: "--font-forum",
  subsets: ["latin", "cyrillic"],
  weight: "400",
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin", "cyrillic"],
  weight: ["400", "500", "600"],
});

const gravhez = localFont({
  src: "./fonts/GRAVHEZ.otf",
  variable: "--font-gravhez",
  display: "swap",
  weight: "400",
});

export const metadata: Metadata = {
  title: "VOSSA",
  description: "VOSSA landing page implementation.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="uk"
      className={`${forum.variable} ${manrope.variable} ${gravhez.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
