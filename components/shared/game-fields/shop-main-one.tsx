import React from "react";
import { ChangeValue, Container, ShopModal } from "..";
import { useGameStore } from "@/store/game";

export const ShopMainOne: React.FC = () => {
  const [showModalShop, setShowModalShop] = React.useState(false);

  const [baseImage, mana, playerUnitsOne, minerals, attack, bossLife, addWorker] =
    useGameStore((state) => [
      state.one.image,
      state.one.mana,
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
          <img
            onClick={() => setShowModalShop(true)}
            src={baseImage}
            className="h-[24vh] px-2 cursor-pointer"
          />
        </div>
        <div className="relative float-right flex flex-col justify-between">
          <ChangeValue
            sign="-"
            value={attack}
            key={bossLife}
            className="absolute -right-8 text-red-500"
          />
          <span className="w-[50px] h-[50px] text-center text-[36px] rounded-[50%] text-white bg-green-800 cursor-pointer">
            {bossLife}
          </span>
          <img
            onClick={addWorker}
            src={playerUnitsOne[0]?.image}
            className="w-[50px] h-[50px] cursor-pointer"
          />
        </div>
      </div>

      <ShopModal
        showModalShop={showModalShop}
        closeModal={() => setShowModalShop(false)}
        playerUnits={playerUnitsOne}
        minerals={minerals}
        mana={mana}
      />
    </Container>
  );
};
