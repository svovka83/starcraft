import React from "react";
import { isGame } from "@/service/game";

export const useGame = () => {
  const [isValue, setIsValue] = React.useState(false);

  React.useEffect(() => {
    async function getGame() {
      const { success } = await isGame();
      setIsValue(success);
    }

    getGame();
  }, []);

  return isValue;
};
