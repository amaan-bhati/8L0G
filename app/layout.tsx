import { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Amaan Bhati Blog site",
  description:
    "Amaan Bhati is an experienced web developer and a tech enthusaiast hence his blog site is where he posts his experiences and thoughts.",
  icons: {
    icon: [
      {
        url: "/favicon.ico",
        sizes: "32x32",
      },
      {
        url: "/favicon.ico",
        sizes: "16x16",
      },
      {
        url: "/favicon.ico",
        sizes: "64x64",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
