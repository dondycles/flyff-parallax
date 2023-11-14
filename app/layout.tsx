import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { NextUI } from "@/components/ui/nextui";
import { GeistSans } from "geist/font/sans";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Flyff",
  description: "Flyff",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={GeistSans.className}>
        <NextUI>{children}</NextUI>
      </body>
    </html>
  );
}
