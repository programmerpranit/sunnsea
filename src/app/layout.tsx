import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import React from "react";

export const metadata: Metadata = {
  title: "Sun N Sea Holidays LLP",
  description:
    "We are delighted to inform our beloved guests, that we at Diveagar have come up with the biggest resort in the vicinity, with 45 well-appointed rooms we also have a beautiful coffee shop to make you overcome your Monday blues.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>): JSX.Element {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin=""
        />
        <link
          href="https://fonts.googleapis.com/css2?family=EB+Garamond:ital,wght@0,400..800;1,400..800&family=Work+Sans:ital,wght@0,100..900;1,100..900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
