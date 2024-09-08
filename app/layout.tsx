import type { Metadata } from "next";
import "./globals.css";
import { Roboto_Mono, Orbitron } from '@next/font/google';

// Load Roboto Mono
const robotoMono = Roboto_Mono({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-roboto-mono'
});

// Load Orbitron
const orbitron = Orbitron({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-orbitron'
});

export const metadata: Metadata = {
  title: "Geekathon",
  description: "A Hackathon hosted by ",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${robotoMono.variable} ${orbitron.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
