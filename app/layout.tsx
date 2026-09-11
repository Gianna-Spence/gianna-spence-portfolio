import type { Metadata } from "next";
import {
  Geist,
  IBM_Plex_Mono,
  Cormorant_Garamond,
} from "next/font/google";

import ApplicationShell from "@/src/components/ApplicationShell";
import "./globals.css";

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-body",
});

const mono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-mono",
});

const heading = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-heading",
});


export const metadata: Metadata = {
  title: "Celestial Portfolio",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return ( 
    <html
  lang="en"
  className={`${geist.variable} ${mono.variable} ${heading.variable} h-full`}
>
      <body className="min-h-full bg-[#0a0a0b]">
        <ApplicationShell>{children}</ApplicationShell>
      </body>
    </html>
  );
}
