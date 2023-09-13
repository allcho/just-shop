"use client";
import Link from "next/link";
import classes from "./pagination.module.scss";

type PropTypes = {
  totalCount: string | null;
  category?: number;
  page: number;
  limit?: number;
  sort: string | undefined;
};

export const Pagination = ({
  totalCount,
  page: current,
  limit = 12,
  sort,
  category,
}: PropTypes) => {
  const pageCount = Math.ceil(Number(totalCount) / limit);

  if (pageCount === 1) return null;

  return (
    <ul className={classes.pagination}>
      {Array.from({ length: pageCount }).map((_, i) => {
        const page = i + 1;

        let url = "/";
        if (category) url += "category/" + category;
        const search = new URLSearchParams({ page: "" + page });
        if (sort) search.set("sort", sort);

        const className = page === current ? classes.item : classes.disabled;
        return (
          <li key={page} className={className}>
            <Link href={url + "?" + search.toString()}>{page}</Link>
          </li>
        );
      })}
    </ul>
  );
};
