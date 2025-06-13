import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Josefin_Sans } from "next/font/google";
import "./globals.css";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const Josefin = Josefin_Sans({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Pinned | Abhishek",
  description: "Top pinned tweets by Abhishek",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${Josefin.className} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
