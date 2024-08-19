import Link from "next/link";
import { Races } from "@/components/shared";
import { Button } from "@/components/ui";
import Image from "next/image";
import craft from "/images/utils/mainImage.jpg";

export default function Home() {
  return (
    <div className="text-center">
      <h1 className="text-[110px] text-violet-700 font-bold">StarCraft</h1>

      <Races />

      <Link href="/game" className="text-[24px]">
        <Button variant="default" size="lg" className="text-[24px]">
          Start
        </Button>
      </Link>

      <Image
        src={craft}
        className="fixed top-0 left-0 right-0 bottom-0 -z-10"
        alt="main"
      />
    </div>
  );
}
