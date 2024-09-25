import { HomeHeader, ChooseRaces, Version } from "@/components/shared";
import Image from "next/image";
import craft from "/images/utils/main_background.jpg";

export default function Home() {
  return (
    <div className="text-center">
      <HomeHeader />

      <ChooseRaces />

      <Image
        src={craft}
        className="fixed w-[100vw] h-[100vh] top-0 left-0 right-0 bottom-0 -z-10"
        alt="main"
      />

      <Version className="float-end" />
    </div>
  );
}
