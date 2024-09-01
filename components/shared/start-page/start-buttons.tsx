import React from "react";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { Button } from "@/components/ui";
import { useGame } from "@/hooks/use-game";
import { useAuth } from "@/hooks/use-auth";
import { Login, ModalCheckNewGame, Register } from "..";
import { removeToken } from "@/app/actions";

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
  const [isStartButton, setIsStartButton] = React.useState(false);
  const [openModal, setOpenModal] = React.useState(false);
  const [openLogin, setOpenLogin] = React.useState(false);
  const [openRegister, setOpenRegister] = React.useState(false);

  const isAuth = useAuth(openLogin, openRegister);
  const isGame = useGame();

  const checkNewGame = () => {
    if (!isGame) {
      return setIsStartButton(true);
    }
    return setOpenModal(true);
  };

  const login = () => setOpenLogin(true);
  const logout = () => removeToken().then(() => setOpenLogin(true));

  return (
    <div>
      {isStartButton && (
        <Link
          href="/game"
          className={cn("text-[24px]", {
            "pointer-events-none": nameOne && nameTwo ? false : true,
          })}
        >
          <Button
            size="lg"
            disabled={nameOne && nameTwo ? false : true}
            onClick={createGame}
          >
            Start
          </Button>
        </Link>
      )}

      {!isStartButton && (
        <div className="flex justify-center gap-10 text-[22px]">
          <Button size="lg" disabled={!isAuth} onClick={checkNewGame}>
            New game
          </Button>
          <Link
            href="/game"
            className={cn({
              "pointer-events-none": !isGame,
            })}
          >
            <Button size="lg" disabled={!isGame}>
              Continue
            </Button>
          </Link>
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
        </div>
      )}

      <ModalCheckNewGame
        openModal={openModal}
        setOpenModal={setOpenModal}
        setIsStartButton={setIsStartButton}
      />
      <Login
        openLogin={openLogin}
        setOpenLogin={setOpenLogin}
        showRegister={() => {
          setOpenLogin(false);
          setOpenRegister(true);
        }}
      />
      <Register openRegister={openRegister} setOpenRegister={setOpenRegister} />
    </div>
  );
};
