"use client"

import React from "react";
import { cn } from "@/lib/utils";
import { useStarcraftStore } from "@/store/starcraft";
import { categories } from "@/service/starcraft";
import { Category } from "@prisma/client";

export const Categories: React.FC = () => {
  const [category, setCategory] = React.useState<Category[]>([]);
  const activeId = useStarcraftStore().activeId;

  React.useEffect(() => {
    categories().then((data) => {
      setCategory(data);
    });
  }, []);

  return (
    <div className="sticky top-0 h-14 flex justify-center gap-20 bg-gray-100 shadow-lg shadow-violet-200 p-2 z-40">
      {category.map(({ name }, index) => (
        <a
          key={index}
          href={`/starcraft#${name}`}
          className={cn(
            "flex items-center text-[20px] font-bold h-10 rounded-2xl px-7",
            name === activeId &&
              "bg-white shadow-md shadow-gray-300 text-violet-700"
          )}
        >
          <span>{name}</span>
        </a>
      ))}
    </div>
  );
};
