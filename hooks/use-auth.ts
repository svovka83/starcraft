import React from "react";
import { auth } from "@/service/user";

export const useAuth = (login: boolean, register: boolean) => {
  const [isValue, setIsValue] = React.useState(false);

  React.useEffect(() => {
    async function getUser() {
      const { success } = await auth();
      setIsValue(success);
    }

    getUser();
  }, [login, register]);

  return isValue;
};
