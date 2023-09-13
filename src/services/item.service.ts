import { notFound } from "next/navigation";

const baseURL = "http://localhost:3099";

export class ItemService {
  static async getItems(
    page: number,
    limit: number,
    category?: number,
    sortDir?: string
  ) {
    const query = new URLSearchParams({
      _embed: "cart",
      _page: "" + page,
      _limit: "" + limit,
    });

    if (sortDir === "asc" || sortDir === "desc") {
      query.set("_sort", "price");
      query.set("_order", sortDir);
    }

    if (category) query.set("category_id", "" + category);

    const res = await fetch(`${baseURL}/items?${query}`, { cache: "no-store" });

    if (res.status === 404) notFound();
    else if (!res.ok) throw new Error("Failed to fetch data");

    const items = await res.json();

    if (!category && items.length <= 0) notFound();

    return {
      items,
      totalCount: res.headers.get("x-total-count"),
    };
  }

  static async getItem(id: any) {
    const res = await fetch(`${baseURL}/items/${id}?_embed=cart`, {
      cache: "no-store",
    });

    if (res.status === 404) {
      notFound();
    } else if (!res.ok) {
      throw new Error("Failed to fetch data");
    }

    return res.json();
  }
}
