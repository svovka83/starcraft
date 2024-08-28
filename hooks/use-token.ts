import React from "react";
import { isToken } from "@/service/game";

export const useToken = () => {
  const [isContinue, setIsContinue] = React.useState(false);

  React.useEffect(() => {
    async function getToken() {
      const { success } = await isToken();
      setIsContinue(success);
    }

    getToken();
  }, []);

  return isContinue;
};
