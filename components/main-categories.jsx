import { Card, CardTitle } from "./ui/card";
import Link from "next/link";

import { getCategories } from "@/app/actions";

export default async function MainCategories() {
  const categories = await getCategories();

  return (
    <div className="grid grid-cols-2 gap-3 px-4 py-4 md:grid-cols-3 xl:grid-cols-5">
      {categories.map((category) => (
        <Link
          className="h-full"
          key={category.category_id}
          href={`/catalog?${new URLSearchParams({ category_id: category.category_id })}`}
        >
          <Card className="flex h-full flex-row items-center justify-center gap-2 px-3 py-3 text-center sm:py-5 sm:text-xl md:py-8 md:text-2xl">
            <CardTitle className="leading-5">{category.name}</CardTitle>
          </Card>
        </Link>
      ))}
    </div>
  );
}
