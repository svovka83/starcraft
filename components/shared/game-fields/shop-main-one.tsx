import React from "react";
import Image from "next/image";
import { ChangeValue, Container, ShopModal } from "..";
import { useGameStore } from "@/store/game";

export const ShopMainOne: React.FC = () => {
  const [showModalShop, setShowModalShop] = React.useState(false);

  const [base, playerUnitsOne, minerals, attack, bossLife, addWorker] =
    useGameStore((state) => [
      state.one.info.image,
      state.one.units,
      state.one.minerals,
      state.two.fighterUp.attack,
      state.one.boss,
      state.createWorker,
    ]);

  return (
    <Container className="p-1">
      <div className="flex justify-between">
        <div>
          <Image
            onClick={() => setShowModalShop(true)}
            src={base}
            alt="base"
            className="h-[24vh] px-2 cursor-pointer"
          />
        </div>
        <div className="relative float-right flex flex-col justify-between">
          <ChangeValue
            value={attack}
            key={bossLife}
            className="absolute -right-8 text-red-500"
          />
          <span className="w-[50px] h-[50px] text-center text-[36px] rounded-[50%] text-white bg-green-800 cursor-pointer">
            {bossLife}
          </span>
          <Image
            onClick={addWorker}
            src={playerUnitsOne[0]?.image}
            alt="worker"
            width={50}
            height={50}
            className="cursor-pointer"
          />
        </div>
      </div>

      <ShopModal
        showModalShop={showModalShop}
        closeModal={() => setShowModalShop(false)}
        playerUnits={playerUnitsOne}
        minerals={minerals}
      />
    </Container>
  );
};
