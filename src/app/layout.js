import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "2BAC",
  description: "منصة تعليمية لتلاميذ الباكالوريا",
  other: {
    google: "notranslate",
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="ar"
      translate="no"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <head>
        <meta name="google" content="notranslate" />
      </head>
      <body className="min-h-full flex flex-col" translate="no">
        {children}
      </body>
    </html>
  );
}