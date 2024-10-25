import type { Metadata } from "next";
import "./globals.css";
import { Layout } from "@/types/Layout";
import { geistMono, geistSans } from "./fonts";
import { ThemeProvider } from "@/components/ThemeProvider";

export const metadata: Metadata = {
  title: {
    template: "%s | Repair Shop",
    default: "Repair Shop",
  },
  description: "NextJS 15 by Dave Grey",
  applicationName: "Repair Shop",
};

function RootLayout({ children }: Layout) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}

export default RootLayout;
