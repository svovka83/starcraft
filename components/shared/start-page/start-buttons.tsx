import React from "react";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { Button } from "@/components/ui";
import { useGame } from "@/hooks/use-game";
import { useAuth } from "@/hooks/use-auth";
import { ChooseModeButton, Login, NewGameButton, Register } from "..";
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
  const [openLogin, setOpenLogin] = React.useState(false);
  const [openRegister, setOpenRegister] = React.useState(false);

  const isAuth = useAuth(openLogin, openRegister);
  const isGame = useGame(openLogin);

  const login = () => setOpenLogin(true);
  const logout = () => removeToken().then(() => setOpenLogin(true));

  return (
    <div className="flex justify-center gap-10 text-[22px]">
      <ChooseModeButton />

      <NewGameButton
        nameOne={nameOne}
        nameTwo={nameTwo}
        createGame={createGame}
        isAuth={isAuth}
        isGame={isGame}
      />

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
