import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Kervin Daniel Leonardo Francois | Portfolio",
  description: "Portafolio personal de kervin leonardo",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
