import type { Metadata } from "next";
import { Toaster } from "react-hot-toast";

export const metadata: Metadata = {
  title: "Starcraft Next",
  description: "Play game starcraft",
};

export default function GameLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="max-w-[1180px] min-h-screen mx-auto">
      {children}
      <Toaster />
    </main>
  );
}
