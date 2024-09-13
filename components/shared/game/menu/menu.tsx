import React from "react";
import { DeleteGame, ExitGame, SaveGame, SoundGame } from "../..";
import {
  Button,
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui";
import { button_click } from "@/constants";

export const Menu: React.FC = () => {
  const [openMenu, setOpenMenu] = React.useState(false);

  const openCloseMenu = () => {
    setOpenMenu(!openMenu);
    button_click.play();
  };

  return (
    <Popover open={openMenu} onOpenChange={setOpenMenu}>
      <PopoverTrigger onClick={openCloseMenu}>Menu</PopoverTrigger>
      <PopoverContent className="flex flex-col gap-3 bg-purple-100">
        <h2 className="text-center text-2xl font-bold text-purple-600">
          Game menu
        </h2>
        <SaveGame setOpenMenu={setOpenMenu} />
        <Button variant="success">HELP</Button>
        <DeleteGame />
        <ExitGame />
      </PopoverContent>
    </Popover>
  );
};
