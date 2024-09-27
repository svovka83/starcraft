import React from "react";
import { Version } from "../..";

export const Footer: React.FC = () => {
  return (
    <div className="relative h-[100px] bg-gray-100 flex justify-center items-center">
      <b className="text-2xl text-violet-500">&copy; SVovka 2024</b>
      <Version className="absolute bottom-6 right-8 font-bold text-violet-500" />
    </div>
  );
};
