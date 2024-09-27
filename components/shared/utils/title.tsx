import React from "react";
import clsx from "clsx";

type TitleSize = "xs" | "sm" | "md" | "lg" | "lg_craft" | "xl";

interface Props {
  size?: TitleSize;
  text: string;
}

export const Title: React.FC<Props> = ({ text, size = "sm" }) => {
  const mapTagBySize = {
    xs: "h5",
    sm: "h4",
    md: "h3",
    lg: "h2",
    lg_craft: "h2",
    xl: "h1",
  } as const;

  const mapClassNameBySize = {
    xs: "text-[16px]",
    sm: "text-[22px]",
    md: "text-[26px]",
    lg: "text-[32px]",
    lg_craft: "text-[32px] font-bold text-violet-700 pointer-events-none",
    xl: "text-[40px]",
  } as const;

  return React.createElement(
    mapTagBySize[size],
    { className: clsx(mapClassNameBySize[size]) },
    text
  );
};
