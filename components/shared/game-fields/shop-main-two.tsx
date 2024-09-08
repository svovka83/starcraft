import React from "react";
import { ChangeValue, Container, ShopModal } from "..";
import { useGameStore } from "@/store/game";
import { useTriggerAnimate } from "@/store/trigger-animations";

export const ShopMainTwo: React.FC = () => {
  const [showModalShop, setShowModalShop] = React.useState(false);

  const { isAnimateDamageBossTwo } = useTriggerAnimate();

  const [
    baseImage,
    mana,
    playerUnitsTwo,
    battleUnitsTwo,
    minerals,
    attack,
    bossLife,
    addWorker,
  ] = useGameStore((state) => [
    state.two.image,
    state.two.mana,
    state.two.units,
    state.two.battleground,
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
            sign="-"
            value={attack}
            isAnimate={isAnimateDamageBossTwo}
            className="absolute -left-8 text-red-500"
          />
          <span className="w-[50px] h-[50px] text-center text-[36px] rounded-[50%] text-white bg-green-800 cursor-pointer">
            {bossLife}
          </span>
          <img
            onClick={addWorker}
            src={playerUnitsTwo[0]?.image}
            className="w-[50px] h-[50px] cursor-pointer scale-x-[-1]"
          />
          <span className="absolute bottom-11 w-[16px] h-[16px] text-center text-white text-[12px] font-bold bg-blue-500 pointer-events-none">
            1
          </span>
        </div>
        <div>
          <img
            onClick={() => setShowModalShop(true)}
            src={baseImage}
            className="relative h-[24vh] px-2 cursor-pointer scale-x-[-1]"
          />
        </div>
      </div>

      <ShopModal
        playerUnits={playerUnitsTwo}
        battleLength={battleUnitsTwo.length}
        showModalShop={showModalShop}
        closeModal={() => setShowModalShop(false)}
        minerals={minerals}
        mana={mana}
      />
    </Container>
  );
};
