import React from "react";
import { Button } from "@/components/ui";
import { useGame } from "@/hooks/use-game";
import { useAuth } from "@/hooks/use-auth";
import {
  ChooseModeButton,
  ContinueButton,
  Login,
  NewGameButton,
  Register,
} from "..";
import { removeToken } from "@/app/actions";
import { useUserStore } from "@/store/user";
import { button_click, welcome_off } from "@/constants";

interface Props {
  nameOne: string;
  nameTwo: string;
  createGame: VoidFunction;
}

export const StartButtons: React.FC<Props> = ({
  nameOne,
  nameTwo,
  createGame,
}) => {
  const logoutUser = useUserStore((state) => state.logoutUser);

  const [openLogin, setOpenLogin] = React.useState(false);
  const [openRegister, setOpenRegister] = React.useState(false);

  const isAuth = useAuth(openLogin, openRegister);
  const isGame = useGame(openLogin);

  const login = () => {
    button_click.play();
    setOpenLogin(true);
  };
  const logout = () =>
    removeToken().then(() => {
      welcome_off.play();
      logoutUser();
      setOpenLogin(true);
    });

  return (
    <div className="flex justify-center gap-10 text-[22px]">
      <ChooseModeButton isAuth={isAuth} />

      <NewGameButton
        nameOne={nameOne}
        nameTwo={nameTwo}
        createGame={createGame}
        isAuth={isAuth}
        isGame={isGame}
      />

      <ContinueButton isGame={isGame} />

      <div>
        {!isAuth && (
          <Button
            size="lg"
            className="bg-purple-500 hover:bg-purple-600 px-10"
            onClick={login}
          >
            Login
          </Button>
        )}
        {isAuth && (
          <Button
            size="lg"
            className="bg-orange-500 hover:bg-orange-600"
            onClick={logout}
          >
            Logout
          </Button>
        )}
      </div>

      <Login
        openLogin={openLogin}
        setOpenLogin={setOpenLogin}
        showRegister={() => {
          button_click.play();
          setOpenLogin(false);
          setOpenRegister(true);
        }}
      />
      <Register openRegister={openRegister} setOpenRegister={setOpenRegister} />
    </div>
  );
};
