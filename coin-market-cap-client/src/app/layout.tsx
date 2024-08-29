import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/styles/index.scss";
import MainProviders from "@/Components/Providers/MainProviders/MainProviders";

const inter = Inter({
  subsets: ["latin"], // Use subsets to reduce the font file size
  weight: ["400", "700"], // Specify the weights you need
  variable: "--font-inter", // Create a CSS variable for the font
});

export const metadata: Metadata = {
  title: "Coinmarketcap",
  description: "coinmarketcap clone app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <MainProviders>{children}</MainProviders>
      </body>
    </html>
  );
}
