// use to create structures for all pages in the website

import type { Metadata } from "next";
import { Manrope  } from "next/font/google";
import "./globals.css";
import ConvexClerkProvider from "@/providers/ConvexClerkProvider";

const manrope = Manrope ({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Podify AI",
  description: "Generate your podcasts using AI",
  icons: {
    icon: '/icons/logo.svg'
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
       <body className={`${manrope.className}`}>
       <ConvexClerkProvider>{children}</ConvexClerkProvider>  
          </body>
    </html>
  );
}
