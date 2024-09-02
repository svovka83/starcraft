import React from "react";
import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
  AlertDialogCancel,
  AlertDialogAction,
} from "@/components/ui";

interface Props {
  trigger: React.ReactNode;
  title: string;
  text?: string;
  toConfirm: () => void;
}

export const Alert: React.FC<Props> = ({ trigger, title, text, toConfirm }) => {
  return (
    <AlertDialog>
      <AlertDialogTrigger>{trigger}</AlertDialogTrigger>
      <AlertDialogContent className="bg-neutral-700 text-white">
        <AlertDialogHeader>
          <AlertDialogTitle>{title}</AlertDialogTitle>
          <AlertDialogDescription>{text}</AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel className="w-[100px] text-white">
            CANCEL
          </AlertDialogCancel>
          <AlertDialogAction
            onClick={toConfirm}
            className="w-[100px] bg-red-500 hover:bg-red-500/85"
          >
            YES
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};
