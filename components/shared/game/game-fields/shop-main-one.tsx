import React from "react";
import {
  ChangeValue,
  Container,
  Explosion,
  ShopModal,
  ToolTip,
  UpgradeAvailableInfo,
  UpgradeBase,
  WindowUpgradeBase,
} from "../..";
import { useGameStore } from "@/store/game";
import { useTriggerAnimate } from "@/store/trigger-animations";
import { button_click, explosion_unit } from "@/constants";

export const ShopMainOne: React.FC = () => {
  const [showModalShop, setShowModalShop] = React.useState(false);
  const [openUpdateBase, setOpenUpdateBase] = React.useState(false);

  const { isAnimateDamageBossOne } = useTriggerAnimate();

  const [
    baseImage,
    mana,
    currentMana,
    playerUnitsOne,
    battleUnitsOne,
    minerals,
    attack,
    bossLife,
    addWorker,
  ] = useGameStore((state) => [
    state.one.image,
    state.one.mana,
    state.one.currentMana,
    state.one.units,
    state.one.battleground,
    state.one.minerals,
    state.two.fighterUp.attack,
    state.one.boss,
    state.createWorker,
  ]);

  const openUpgradeBase = () => {
    button_click.play();
    setOpenUpdateBase(true);
  };

  return (
    <Container className="p-1">
      <div className="flex justify-between">
        <div className="relative">
          <UpgradeBase
            mana={mana}
            currentMana={currentMana}
            minerals={minerals}
            openUpgradeBase={openUpgradeBase}
            side="left-0"
          />

          <ToolTip
            trigger={
              <img
                onClick={() => {
                  button_click.play();
                  setShowModalShop(true);
                }}
                src={baseImage}
                className="h-[24vh] px-2 cursor-pointer"
              />
            }
            text={"You can buy units here"}
            className="translate-y-[130%]"
          />

          <Explosion
            isAnimate={isAnimateDamageBossOne}
            effect={explosion_unit}
            className="absolute top-16 left-24"
          />
        </div>

        <div className="relative float-right flex flex-col justify-between">
          <ChangeValue
            sign="-"
            value={attack}
            isAnimate={isAnimateDamageBossOne}
            className="absolute -right-8 text-red-500"
          />

          <span className="w-[50px] h-[50px] text-center text-[36px] rounded-[50%] text-white bg-green-800 cursor-pointer">
            <ToolTip trigger={bossLife} text={"Boss Life"} />
          </span>

          <ToolTip
            trigger={
              <img
                onClick={addWorker}
                src={playerUnitsOne[0]?.image}
                className="w-[50px] h-[50px] cursor-pointer"
              />
            }
            text="Add worker"
          />
          <span className="absolute bottom-11 w-[16px] h-[16px] text-center text-white text-[12px] font-bold bg-blue-500 pointer-events-none">
            1
          </span>
        </div>
      </div>

      <ShopModal
        playerUnits={playerUnitsOne}
        battleLength={battleUnitsOne.length}
        mana={mana}
        currentMana={currentMana}
        minerals={minerals}
        showModalShop={showModalShop}
        closeModal={() => setShowModalShop(false)}
      />
      <WindowUpgradeBase
        currentMana={currentMana}
        openUpdateBase={openUpdateBase}
        setOpenUpdateBase={setOpenUpdateBase}
      />
      <UpgradeAvailableInfo
        mana={mana}
        currentMana={currentMana}
        minerals={minerals}
        text="Upgrade available"
        className="absolute -translate-y-16"
      />
    </Container>
  );
};
