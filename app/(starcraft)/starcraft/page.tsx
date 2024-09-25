import React from "react";
import { Categories, ContentUnits } from "@/components/shared";
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
      <Categories />

      <ContentUnits unitsGroup={unitsGroup} />
    </>
  );
}
