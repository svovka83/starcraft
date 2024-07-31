import {
  HeaderGame,
  ShopFighterLine,
  BattlegroundLine,
  MineralsLine,
  HideTurn,
} from "@/components/shared";

export default function Game() {
  return (
    <>
      <div>
        <HeaderGame />
        <ShopFighterLine />
        <BattlegroundLine />
        <MineralsLine />
        <HideTurn />
      </div>
    </>
  );
}
