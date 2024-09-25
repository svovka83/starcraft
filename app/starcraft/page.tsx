import React from "react";
import {
  StarCraftHeader,
  Categories,
  Footer,
  ContentUnits,
} from "@/components/shared";
import { useRouter } from "next/navigation";
import { auth } from "@/service/user";
import { findUnits } from "@/functions";
import { GetSearchParams } from "@/functions/server-functions/find-units";

export default async function StarCraft({
  searchParams,
}: {
  searchParams: GetSearchParams;
}) {
  const unitsGroup = await findUnits(searchParams);

  // const route = useRouter();

  // auth().then(({ success }) => {
  //   if (!success) {
  //     return route.push("/");
  //   }
  // });
  return (
    <>
      <StarCraftHeader />

      <Categories />

      <ContentUnits unitsGroup={unitsGroup} />

      <Footer />
    </>
  );
}
