import type { Metadata } from "next";
import { Footer, StarCraftHeader } from "@/components/shared";

export const metadata: Metadata = {
  title: "Starcraft Page",
  description: "Filter units with starcraft",
};

export default function StarCraftLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="max-w-[1180px] mx-auto">
      <StarCraftHeader />
      <main className="min-h-craft">{children}</main>
      <Footer />
    </div>
  );
}
