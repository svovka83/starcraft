import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import { Toaster } from "react-hot-toast";
import "./globals.css";

const nunito = Nunito({
  subsets: ["cyrillic"],
  variable: "--font-nunito",
  weight: ["400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Starcraft Next",
  description: "Play game starcraft",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link type="image/png" rel="icon" href="/logo.png" />
      </head>
      <body className={nunito.className}>
        <main className="max-w-[1180px] min-h-screen mx-auto">
          {children}
          <Toaster />
        </main>
      </body>
    </html>
  );
}
