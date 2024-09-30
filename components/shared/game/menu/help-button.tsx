import React from "react";
import { Button } from "@/components/ui";
import { HelpRegulations } from "../..";
import { button_click } from "@/constants";

interface Props {
  setOpenMenu: (openMenu: boolean) => void;
}

export const HelpButton: React.FC<Props> = ({ setOpenMenu }) => {
  const [openHelp, setOpenHelp] = React.useState(false);

  const openRegulations = () => {
    button_click.play();
    setOpenHelp(true);
  };

  const closeRegulations = () => {
    button_click.play();
    setOpenHelp(false);
    setOpenMenu(false);
  };

  return (
    <>
      <Button variant="success" onClick={openRegulations}>
        HELP
      </Button>
      <HelpRegulations openHelp={openHelp} setOpenHelp={closeRegulations} />
    </>
  );
};
