import { Card, CardTitle } from "./ui/card";
import Link from "next/link";

import { getCategories } from "@/app/actions";

export default async function MainCategories() {
  const categories = await getCategories();

  return (
    <div className="grid grid-cols-2 gap-3 px-4 py-8">
      {categories.map((category) => (
        <Link
          key={category.category_id}
          // href={`/catalog?category_id=${category.category_id}`}
          href={`/catalog?${new URLSearchParams({ category_id: category.category_id })}`}
        >
          <Card className="flex flex-row items-center justify-center gap-2 p-3 text-center">
            <CardTitle className="leading-5">{category.name}</CardTitle>
          </Card>
        </Link>
      ))}
    </div>
  );
}
