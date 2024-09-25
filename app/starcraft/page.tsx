import React from "react";
import {
  StarCraftHeader,
  Categories,
  Footer,
  ContentUnits,
} from "@/components/shared";
import { findUnits } from "@/functions";
import { GetSearchParams } from "@/functions/server-functions/find-units";

export default async function StarCraft({
  searchParams,
}: {
  searchParams: GetSearchParams;
}) {
  const unitsGroup = await findUnits(searchParams);
  return (
    <>
      <StarCraftHeader />

      <Categories />

      <ContentUnits unitsGroup={unitsGroup} />

      <Footer />
    </>
  );
}
