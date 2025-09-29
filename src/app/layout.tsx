import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import SbukFooter from "@/components/shared/ui/layout/footer";
import siteData from '@/lib/siteData.json';
import { SbukHeader } from "@/components/shared/ui/layout/header";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: siteData.title,
  description: siteData.description,
};

export default function RootLayout({
  children,
  data
}: Readonly<{
  children: React.ReactNode;
  data: any;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <SbukHeader />
        {children}
        <SbukFooter />
      </body>
    </html>
  );
}
