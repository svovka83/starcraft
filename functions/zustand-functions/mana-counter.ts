export const manaCounter = (currentMana: number, value: number) => {
  const correctMana = currentMana - value;
  return correctMana;
};
