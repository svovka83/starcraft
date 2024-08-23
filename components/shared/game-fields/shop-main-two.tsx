import React from "react";
import Image from "next/image";
import { ChangeValue, Container, ShopModal } from "..";
import { useGameStore } from "@/store/game";

export const ShopMainTwo: React.FC = () => {
  const [showModalShop, setShowModalShop] = React.useState(false);

  const [base, playerUnitsTwo, minerals, attack, bossLife, addWorker] =
    useGameStore((state) => [
      state.two.info.image,
      state.two.units,
      state.two.minerals,
      state.one.fighterUp.attack,
      state.two.boss,
      state.createWorker,
    ]);

  return (
    <Container className="p-1">
      <div className="flex justify-between">
        <div className="relative float-right flex flex-col justify-between">
          <ChangeValue
            value={attack}
            key={bossLife}
            className="absolute -left-8 text-red-500"
          />
          <span className="w-[50px] h-[50px] text-center text-[36px] rounded-[50%] text-white bg-green-800 cursor-pointer">
            {bossLife}
          </span>
          <Image
            onClick={addWorker}
            src={playerUnitsTwo[0]?.image}
            alt="worker"
            width={50}
            height={50}
            className="cursor-pointer scale-x-[-1]"
          />
        </div>
        <div>
          <Image
            onClick={() => setShowModalShop(true)}
            src={base}
            className="relative h-[24vh] px-2 cursor-pointer scale-x-[-1]"
            alt="base"
          />
        </div>
      </div>

      <ShopModal
        showModalShop={showModalShop}
        closeModal={() => setShowModalShop(false)}
        minerals={minerals}
        playerUnits={playerUnitsTwo}
      />
    </Container>
  );
};
