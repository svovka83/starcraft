import React from "react";

interface Props {
  name: string;
  currentMana: number;
}

export const ManaCounter: React.FC<Props> = ({ name, currentMana }) => {
  return (
    <div className="pointer-events-none text-[22px]">
      <span className="mr-2 text-blue-800">{name}</span>
      <br />
      {currentMana === 0 && <span>⚪⚪⚪⚪⚪⚪</span>}
      {currentMana === 1 && <span>🔵⚪⚪⚪⚪⚪</span>}
      {currentMana === 2 && <span>🔵🔵⚪⚪⚪⚪</span>}
      {currentMana === 3 && <span>🔵🔵🔵⚪⚪⚪</span>}
      {currentMana === 4 && <span>🔵🔵🔵🔵⚪⚪</span>}
      {currentMana === 5 && <span>🔵🔵🔵🔵🔵⚪</span>}
      {currentMana === 6 && <span>🔵🔵🔵🔵🔵🔵</span>}
    </div>
  );
};
