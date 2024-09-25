import { prisma } from "@/prisma/prisma-client";
import { notFound } from "next/navigation";

export default async function Unit({
  params: { unit },
}: {
  params: { unit: string };
}) {
  const currentUnit = await prisma.unit.findFirst({
    where: {
      name: unit,
    },
    include: {
      category: true,
    },
  });

  if (!currentUnit) {
    return notFound();
  }

  return (
    <div className="flex justify-center items-center text-center my-8 gap-40">
      <div>
        <h1 className="text-3xl font-bold text-violet-700">
          {currentUnit.name}
        </h1>
        <img
          src={currentUnit.image}
          className="w-[350px] h-[350px]"
          alt={currentUnit.name}
        />
      </div>
      <div className="text-2xl font-bold">
        <ul>
          <li className="text-violet-700 mb-4">
            Race: {currentUnit.category.name}
          </li>
          <li className="text-blue-700">Mana: {currentUnit.mana}</li>
          <li className="text-green-600">Health: {currentUnit.health}</li>
          <li className="text-red-500">Attack: {currentUnit.attack}</li>
          <li className="text-violet-700">Price: {currentUnit.price}</li>
        </ul>
      </div>
    </div>
  );
}
