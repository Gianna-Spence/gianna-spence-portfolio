import type { Metadata } from "next";
import ApplicationShell from "@/src/components/ApplicationShell";
import "./globals.css";

export const metadata: Metadata = {
  title: "Celestial Portfolio",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className="h-full">
      <body className="min-h-full bg-[#0a0a0b]">
        <ApplicationShell>{children}</ApplicationShell>
      </body>
    </html>
  );
}
