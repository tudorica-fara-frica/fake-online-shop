import { Card, CardTitle } from "./ui/card";
import Link from "next/link";

import { getCategories } from "@/app/actions";
import { connection } from "next/server";

export default async function ItemCategories({ category_id }) {
  await connection();

  const categories = await getCategories();

  return (
    <div className="grid grid-cols-2 gap-3 xl:grid-cols-4">
      {categories.map((category) => {
        if (category.category_id === category_id) return null;
        return (
          <Link
            className="h-full"
            key={category.category_id}
            href={`/catalog?${new URLSearchParams({ category_id: category.category_id })}`}
          >
            <Card className="flex h-full flex-row items-center justify-center gap-2 p-3 text-center">
              <CardTitle className="leading-5">{category.name}</CardTitle>
            </Card>
          </Link>
        );
      })}
    </div>
  );
}
