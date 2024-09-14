import React from "react";
import { Button } from "@/components/ui";

interface Props {
  closeStartModule: VoidFunction;
}

export const CancelGameButton: React.FC<Props> = ({ closeStartModule }) => {
  return (
    <Button size="lg" variant="destructive" onClick={closeStartModule}>
      Cancel
    </Button>
  );
};
