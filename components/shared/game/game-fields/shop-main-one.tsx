import React from "react";
import { ChangeValue, Container, Explosion, ShopModal } from "../..";
import { useGameStore } from "@/store/game";
import { useTriggerAnimate } from "@/store/trigger-animations";
import { explosion_unit } from "@/constants";

export const ShopMainOne: React.FC = () => {
  const [showModalShop, setShowModalShop] = React.useState(false);

  const { isAnimateDamageBossOne } = useTriggerAnimate();

  const [
    baseImage,
    mana,
    playerUnitsOne,
    battleUnitsOne,
    minerals,
    attack,
    bossLife,
    addWorker,
  ] = useGameStore((state) => [
    state.one.image,
    state.one.mana,
    state.one.units,
    state.one.battleground,
    state.one.minerals,
    state.two.fighterUp.attack,
    state.one.boss,
    state.createWorker,
  ]);

  return (
    <Container className="p-1">
      <div className="flex justify-between">
        <div className="relative">
          <img
            onClick={() => setShowModalShop(true)}
            src={baseImage}
            className="h-[24vh] px-2 cursor-pointer"
          />
          <Explosion isAnimate={isAnimateDamageBossOne} effect={explosion_unit} className="absolute top-16 left-24" />
        </div>
        <div className="relative float-right flex flex-col justify-between">
          <ChangeValue
            sign="-"
            value={attack}
            isAnimate={isAnimateDamageBossOne}
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
          <span className="absolute bottom-11 w-[16px] h-[16px] text-center text-white text-[12px] font-bold bg-blue-500 pointer-events-none">
            1
          </span>
        </div>
      </div>

      <ShopModal
        playerUnits={playerUnitsOne}
        battleLength={battleUnitsOne.length}
        showModalShop={showModalShop}
        closeModal={() => setShowModalShop(false)}
        minerals={minerals}
        mana={mana}
      />
    </Container>
  );
};
