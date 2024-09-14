import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui";
import { MoveLeft } from "lucide-react";

export const RightSide: React.FC = () => {
  return (
    <div className="relative">
      <Link href="/">
        <Button variant="starcraft" className="group w-36">
          <span className="group-hover:invisible group-hover:translate-x-[-40px] group-hover:opacity-0 duration-200">
            RETURN
          </span>
          <span className="absolute invisible translate-x-[40px] opacity-0 group-hover:visible group-hover:translate-x-0 group-hover:opacity-100 duration-200">
            <div className="flex items-center gap-2">
              <MoveLeft />
              BACK
            </div>
          </span>
        </Button>
      </Link>
    </div>
  );
};
