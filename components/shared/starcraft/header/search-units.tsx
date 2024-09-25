"use client";

import React from "react";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { useClickAway, useDebounce } from "react-use";
import { Search } from "lucide-react";
import { searchUnits } from "@/service/starcraft";
import { Unit } from "@prisma/client";

export const SearchUnits: React.FC = () => {
  const [focused, setFocused] = React.useState(false);
  const [units, setUnits] = React.useState<Unit[]>([]);
  const [searchQuery, setSearchQuery] = React.useState("");
  const refSearch = React.useRef<HTMLInputElement>(null);

  const handleFocus = () => {
    setFocused(true);
  };

  useClickAway(refSearch, () => {
    setFocused(false);
    setSearchQuery("");
  });

  useDebounce(
    async () => {
      try {
        const data = await searchUnits(searchQuery);
        setUnits(data);
      } catch (error) {
        console.log(error);
      }
    },
    500,
    [searchQuery]
  );

  const clearAllStates = () => {
    setFocused(false);
    setSearchQuery("");
    setUnits([]);
  };

  return (
    <>
      {focused && (
        <div className="fixed top-0 bottom-0 left-0 right-0 bg-black/50 z-50" />
      )}

      <div
        ref={refSearch}
        className="flex rounded-2xl flex-1 justify-between relative h-11 mx-12 z-50"
      >
        <Search className="absolute top-1/2 translate-y-[-50%] left-3 h-5 text-gray-400" />
        <input
          onFocus={handleFocus}
          className="rounded-2xl outline-none w-full bg-gray-100 pl-11"
          type="text"
          placeholder="Search..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />

        {units.length > 0 && (
          <div
            className={cn(
              "absolute w-full bg-white rounded-xl py-4 top-16 shadow-md transition-all duration-200 invisible opacity-0 z-30",
              focused && "visible opacity-100 top-14"
            )}
          >
            {units.map((unit: Unit) => (
              <Link
                key={unit.id}
                href={`/starcraft/${unit.name}`}
                onClick={clearAllStates}
                className="flex items-center gap-8 px-4 py-2 hover:bg-primary/10"
              >
                <img className="w-10 h-10" src={unit.image} alt={unit.name} />
                <span>{unit.name}</span>
              </Link>
            ))}
          </div>
        )}
      </div>
    </>
  );
};
