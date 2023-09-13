import { ItemList } from "@/components/item/card/ItemList";
import { CategoryService } from "@/services/category.service";
import { ItemService } from "@/services/item.service";
import { Metadata } from "next";
import { NextRouter } from "next/router";

export async function generateMetadata({
  params,
}: {
  params: { id: string }
}): Promise<Metadata> {
  const category = await CategoryService.getCategory(params.id);

  return{
    title: category.name,
  }
}

function isString(value: NextRouter["query"][""]): value is string {
  return typeof value === "string";
}

export default async function CategoryPage({
  params,
  searchParams,
}: {
  params: { id: string };
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  const page = isString(searchParams.page) ? searchParams.page : 1;
  const sort = isString(searchParams.sort) ? searchParams.sort : undefined;
  const id = params.id ? Number(params.id) : undefined;
  const limit = process.env.LIMIT_ITEMS;

  const items = await ItemService.getItems(
    Number(page),
    Number(limit ?? 12),
    id,
    sort
  );

  const category = await CategoryService.getCategory(params.id);

  return (
    <>
      <h1 className='text-3xl font-semibold pb-4'>Категория: {category.name}</h1>

      <ItemList
        page={Number(page)}
        items={items.items}
        sort={sort}
        totalCounts={items.totalCount}
        category={id}
      />
    </>
  )
}
