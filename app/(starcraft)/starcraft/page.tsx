import React from "react";
import { Categories, ContentUnits, Regulations } from "@/components/shared";
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
      <Regulations />

      <Categories />

      <ContentUnits unitsGroup={unitsGroup} />
    </>
  );
}
