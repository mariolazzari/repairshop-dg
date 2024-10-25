import type { Metadata } from "next";
import "./globals.css";
import { Layout } from "@/types/Layout";
import { geistMono, geistSans } from "./fonts";

export const metadata: Metadata = {
  title: "Repair Shop",
  description: "NextJS 15 by Dave Grey",
};

function RootLayout({ children }: Layout) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}

export default RootLayout;
