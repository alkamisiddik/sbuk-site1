import type { Metadata } from "next";
import localFont from 'next/font/local'

import "./globals.css";
import siteData from '../../public/siteData.json';
import { SbukHeader } from "@/components/shared/ui/layout/header";
import { SbukFooter } from "@/components/shared/ui/layout/footer";

const helvetica_Neue = localFont({
  src: [
    {
      path: "../../public/fonts/helvetica-neue/HelveticaNeue-Bold.otf",
      weight: "700",
      style: "normal"
    },
    {
      path: "../../public/fonts/helvetica-neue/HelveticaNeue-Light.otf",
      weight: "300",
      style: "normal"
    },
     {
      path: "../../public/fonts/helvetica-neue/HelveticaNeue-Medium.otf",
      weight: "500",
      style: "normal"
    },
    {
      path: "../../public/fonts/helvetica-neue/HelveticaNeue-Roman.otf",
      weight: "400",
      style: "normal"
    },
    {
      path: "../../public/fonts/helvetica-neue/HelveticaNeue-Thin.otf",
      weight: "100",
      style: "normal"
    },
  ],
  variable: "--font-helvetica-neue",
});

export const metadata: Metadata = {
  title: siteData.title,
  description: siteData.description,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body cz-shortcut-listen="true"
        className={`${helvetica_Neue.className} antialiased`}
      >
        <SbukHeader headerData={siteData.header} />
        {children}
        <SbukFooter footerData={siteData.footer} />
      </body>
    </html>
  );
}

