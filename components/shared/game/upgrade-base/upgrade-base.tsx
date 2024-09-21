import React from "react";
import { cn } from "@/lib/utils";
import { ToolTip, UpgradeBaseButton } from "../..";

interface Props {
  mana: number;
  currentMana: number;
  minerals: number;
  openUpgradeBase?: VoidFunction;
  side: "left-0" | "right-0";
}
// need refactoring
export const UpgradeBase: React.FC<Props> = ({
  mana,
  currentMana,
  minerals,
  openUpgradeBase,
  side,
}) => {
  return (
    <>
      {currentMana === 3 &&
        (minerals < 15 || mana < 3 ? (
          <ToolTip
            trigger={
              <UpgradeBaseButton currentMana={currentMana} className={side} />
            }
            text={"15 minerals 3 mana to upgrade base"}
            className={cn("absolute w-28 bottom-6", side)}
          />
        ) : (
          <UpgradeBaseButton
            currentMana={currentMana}
            openUpdateBase={openUpgradeBase}
            className={side}
          />
        ))}
      {currentMana === 4 &&
        (minerals < 20 || mana < 4 ? (
          <ToolTip
            trigger={
              <UpgradeBaseButton currentMana={currentMana} className={side} />
            }
            text={"20 minerals 4 mana to upgrade base"}
            className={cn("absolute w-28 bottom-6", side)}
          />
        ) : (
          <UpgradeBaseButton
            currentMana={currentMana}
            openUpdateBase={openUpgradeBase}
            className={side}
          />
        ))}
      {currentMana === 5 &&
        (minerals < 25 || mana < 5 ? (
          <ToolTip
            trigger={
              <UpgradeBaseButton currentMana={currentMana} className={side} />
            }
            text={"25 minerals 5 mana to upgrade base"}
            className={cn("absolute w-28 bottom-6", side)}
          />
        ) : (
          <UpgradeBaseButton
            currentMana={currentMana}
            openUpdateBase={openUpgradeBase}
            className={side}
          />
        ))}
      {currentMana === 6 && (
        <UpgradeBaseButton currentMana={currentMana} className={side} />
      )}
    </>
  );
};
