import React from "react";
import { cn } from "@/lib/utils";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui";
import { REGULATIONS, button_click } from "@/constants";
import { Circle, CircleArrowLeft, CircleArrowRight, X } from "lucide-react";

interface Props {
  openHelp: boolean;
  setOpenHelp: VoidFunction;
  className?: string;
}

export const HelpRegulations: React.FC<Props> = ({
  openHelp,
  setOpenHelp,
  className,
}) => {
  const [counter, setCounter] = React.useState(0);

  const counterMinus = () => {
    button_click.play();
    setCounter(counter - 1);
  };
  const counterPlus = () => {
    button_click.play();
    setCounter(counter + 1);
  };
  const selectHandle = (id: number) => {
    button_click.play();
    setCounter(id);
  };

  return (
    <Dialog open={openHelp}>
      <DialogContent
        className={cn("max-w-[900px] rounded-md bg-black", className)}
      >
        <DialogTitle className="text-3xl text-center">
          <h1 className="text-3xl font-bold text-white">
            {counter === REGULATIONS[counter].id &&
              REGULATIONS[counter].id + ". " + REGULATIONS[counter].name}
          </h1>
          <X
            size={54}
            className="text-white absolute top-4 right-4 cursor-pointer"
            onClick={setOpenHelp}
          />
        </DialogTitle>
        <div className="text-center">
          <div className="flex justify-center items-center gap-2 mb-8">
            <CircleArrowLeft
              size={54}
              className={cn(
                "text-white active:-translate-x-1 cursor-pointer",
                counter === 0 && "invisible"
              )}
              onClick={counterMinus}
            />

            {counter === REGULATIONS[counter].id && (
              <img
                src={REGULATIONS[counter].image}
                className="w-[80%] max-h-[339.5px]"
                alt={`regulation_${REGULATIONS[counter].name}`}
              />
            )}

            <CircleArrowRight
              size={54}
              className={cn(
                "text-white active:translate-x-1 cursor-pointer",
                counter === REGULATIONS.length - 1 && "invisible"
              )}
              onClick={counterPlus}
            />
          </div>

          <div className="mb-4 text-center text-2xl font-bold text-white">
            {REGULATIONS.map((regulation) => (
              <span
                key={regulation.id}
                className="relative"
                onClick={() => selectHandle(regulation.id)}
              >
                <Circle
                  size={44}
                  className={cn(
                    "inline text-white cursor-pointer",
                    counter === regulation.id && "text-violet-600"
                  )}
                />
                <span
                  className={cn(
                    "absolute right-0 left-0 translate-y-[20%] cursor-pointer",
                    counter === regulation.id && "text-violet-600"
                  )}
                >
                  {regulation.id}
                </span>
              </span>
            ))}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};
