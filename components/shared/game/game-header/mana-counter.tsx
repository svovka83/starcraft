import React from "react";

interface Props {
  currentMana: number;
}

export const ManaCounter: React.FC<Props> = ({ currentMana }) => {
  return (
    <div>
      <span className="mr-2 text-blue-800">Mana -</span>
      {currentMana === 0 && <span>⚪⚪⚪</span>}
      {currentMana === 1 && <span>🔵⚪⚪</span>}
      {currentMana === 2 && <span>🔵🔵⚪</span>}
      {currentMana === 3 && <span>🔵🔵🔵</span>}
    </div>
  );
};
