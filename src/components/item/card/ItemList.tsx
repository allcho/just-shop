"use client";

import classes from "./itemList.module.scss";
import { IItem } from "@/interfaces/item.interface";
import { ItemCard } from "./ItemCard";
import { Pagination } from "../Pagination";
import { usePathname, useRouter } from "next/navigation";
import { ChangeEvent } from "react";

type PropTypes = {
  items: IItem[];
  totalCounts: string | null;
  page: number;
  sort?: string;
  category?: number;
};

export const ItemList = ({
  page,
  sort,
  items,
  totalCounts,
  category,
}: PropTypes) => {
  const router = useRouter();
  const pathname = usePathname();

  const handleChange = async (e: ChangeEvent<HTMLSelectElement>) => {
    router.push(pathname + "?sort=" + e.target.value);
  };

  return (
    <>
      <div className={classes.sort}>
        <select onChange={handleChange} value={sort ?? ""}>
          <option disabled value="">
            Сортировка по цене
          </option>
          <option value="desc">Дороже</option>
          <option value="asc">Дешевле</option>
        </select>
      </div>
      <section className={classes.list}>
        {items?.map((item, idx) => (
          <ItemCard key={item?.id + "_" + idx} data={item} />
        ))}
      </section>
      {items && (
        <Pagination
          category={category}
          totalCount={totalCounts}
          page={page}
          sort={sort}
        />
      )}
    </>
  );
};
