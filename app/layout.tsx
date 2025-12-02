import type { Metadata } from "next";
import { Nunito_Sans, Roboto } from "next/font/google";
import "./globals.css";

const nunitoSans = Nunito_Sans({
  variable: "--font-primary",
  subsets: ["latin"],
  weight: ["300", "400", "600", "700", "800"],
});

const roboto = Roboto({
  variable: "--font-secondary",
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
});

export const metadata: Metadata = {
  title: "MenaPro Agents",
  description: "The trusted experts who turn your UAE property dreams into reality.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${nunitoSans.variable} ${roboto.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
