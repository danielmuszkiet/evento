import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Container from "@/components/Container";

const inter = Inter({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Evento | Find Events Around You",
  description:
    "Browse more than 10,000 events around you. Discover concerts, festivals, workshops, and more in your city with Evento.",
  authors: [{ name: "Daniel Muszkiet", url: "https://danielmuszkiet.com" }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`bg-gray-950 ${inter.className} text-white antialiased`}>
        <Container>
          <Header />
          {children}
          <Footer />
        </Container>
      </body>
    </html>
  );
}
