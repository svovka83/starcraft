import { HomeHeader, ChooseRaces } from "@/components/shared";
import Image from "next/image";
import craft from "/images/utils/mainImage.jpg";

export default function Home() {
  return (
    <div className="text-center">
      <HomeHeader />

      <ChooseRaces />

      <Image
        src={craft}
        className="fixed h-[100vh] top-0 left-0 right-0 bottom-0 -z-10"
        alt="main"
      />
    </div>
  );
}
