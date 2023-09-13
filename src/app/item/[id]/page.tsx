import { ItemService } from "@/services/item.service";
import { ItemFull } from "@/components/item/full/ItemFull";
import { Metadata } from "next";

export async function generateMetadata({
  params,
}: {
  params: { id: string }
}): Promise<Metadata> {
  const dataItem = await ItemService.getItem(params.id);

  return{
    title: dataItem.title,
    description: dataItem.description
  }
}

export default async function ItemPage ({
  params,
}: {
  params: { id: string }
}) {

  const dataItem = await ItemService.getItem(params.id);

  return (
    <>
      <ItemFull item={dataItem}/>
    </>
  )
}