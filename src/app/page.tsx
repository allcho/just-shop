import { ItemList } from "@/components/item/card/ItemList";
import { ItemService } from "@/services/item.service";
import { NextRouter } from "next/router";

function isString(value: NextRouter["query"][""]): value is string {
  return typeof value === "string";
}

export const revalidate = 0
export const dynamic = 'force-dynamic'

export default async function Home({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  const page = isString(searchParams.page) ? searchParams.page : 1;
  const sort = isString(searchParams.sort) ? searchParams.sort : undefined;
  const limit = process.env.LIMIT_ITEMS;
  const items = await ItemService.getItems(Number(page), Number(limit ?? 12), undefined, sort);

  return (
    <ItemList
      items={items.items}
      totalCounts={items.totalCount}
      page={Number(page)}
      sort={sort}
    />
  );
}
