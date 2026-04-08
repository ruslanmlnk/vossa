import type { Metadata } from "next";
import { Forum } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";

const forum = Forum({
  variable: "--font-forum",
  subsets: ["latin", "cyrillic"],
  weight: "400",
});
const gravhez = localFont({
  src: "./fonts/GRAVHEZ.otf",
  variable: "--font-gravhez",
  display: "swap",
  weight: "400",
});

const peridot = localFont({
  src: "./fonts/fonnts.com-Peridot_PE_Variable_Regular.otf",
  variable: "--font-peridot",
  display: "swap",
  weight: "100 900",
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
      className={`${forum.variable} ${gravhez.variable} ${peridot.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col bg-background text-foreground">
        {children}
      </body>
    </html>
  );
}
