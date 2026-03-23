import type { Metadata } from "next";
import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: {
    default: "Open Fields Distribution | Prairie Cannabis Logistics",
    template: "%s | Open Fields Distribution",
  },
  description:
    "Saskatchewan and Manitoba's trusted cannabis wholesale distributor. Fast fulfillment, streamlined ordering, and direct market access for licensed producers and retailers.",
  keywords: [
    "cannabis distribution",
    "cannabis wholesale Saskatchewan",
    "cannabis wholesale Manitoba",
    "MBLL authorized distributor",
    "cannabis logistics Canada",
    "licensed producer distribution",
  ],
  openGraph: {
    title: "Open Fields Distribution",
    description: "Prairie-native cannabis logistics for Saskatchewan and Manitoba.",
    siteName: "Open Fields Distribution",
    locale: "en_CA",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col bg-white text-[#0d1b2a]">
        <Nav />
        <main className="flex-1 pt-16">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
