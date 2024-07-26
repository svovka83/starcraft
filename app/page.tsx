import Link from "next/link";

import { Races } from "@/components/shared";

import { Button } from "@/components/ui";

export default function Home() {
  return (
    <div className="text-center">
      <h1 className="text-[150px] text-violet-900 font-bold">StarCraft</h1>

      <Races />

      <Link href="/game" className="text-[24px]">
        <Button variant="default" size="lg" className="text-[24px]">
          Start
        </Button>
      </Link>
    </div>
  );
}
