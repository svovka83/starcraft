"use client";

import React from "react";
import { cn } from "@/lib/utils";
import { useStarcraftStore } from "@/store/starcraft";
import { INFO } from "@/constants";

export const Categories: React.FC = () => {
  const [activeId, categories, unitsGroup, setCategories, loading] = useStarcraftStore(
    (state) => [
      state.activeId,
      state.categories,
      state.unitsGroup,
      state.setCategories,
      state.loading,
    ]
  );

  React.useEffect(() => {
    setCategories();
  }, []);

  return (
    <div className="sticky top-0 flex justify-center gap-20 bg-gray-100 shadow-lg shadow-violet-200 p-2 z-30">
      {loading && (
        <div className="h-11 text-violet-400 text-4xl font-lg">
          waiting for starcraft menu...
        </div>
      )}

      {!loading &&
        unitsGroup.length > 0 &&
        INFO.map((race, index) => (
          <a
            className={cn(
              "flex items-center text-[20px] font-bold h-11 rounded-2xl px-7",
              race.name === activeId &&
                "bg-white shadow-md shadow-gray-300 text-violet-700"
            )}
            key={index}
            href={`/starcraft#${race.name}`}
          >
            <span>{race.name}</span>
          </a>
        ))}
    </div>
  );
};
