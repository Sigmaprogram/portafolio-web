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
      <head>
        <link rel="icon" href="/codigo (1).png" />
      </head>
      <body>{children}</body>
    </html>
  );
}
