import Link from "next/link";
import { HiMiniChevronLeft, HiMiniChevronRight } from "react-icons/hi2";
import CatalogProductCard from "./catalog-product-card";
import { Suspense } from "react";
import CatalogProductCardSkeleton from "./catalog-product-card-skeleton";

export default function CatalogProducts({
  page,
  categories,
  products,
  searchParams,
}) {
  const startIndex = (+page - 1) * 10;
  const endIndex = startIndex + 10;

  const paginatedProducts = products.slice(startIndex, endIndex);
  const totalPages = Math.ceil(products.length / 10);

  const prevPage = page > 1 ? +page - 1 : 1;
  const nextPage = page < totalPages ? +page + 1 : totalPages;

  function getPageUrl(newPage) {
    const params = new URLSearchParams(searchParams);
    params.set("page", newPage);
    return `?${params.toString()}`;
  }

  return (
    <div className="mx-auto max-w-[750px] px-4 md:max-w-[1000px] xl:max-w-[1400px]">
      <div className="grid grid-cols-1 place-content-center gap-4 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4">
        {paginatedProducts.map((prod) => (
          <Suspense
            key={prod.product_id}
            fallback={<CatalogProductCardSkeleton />}
          >
            <CatalogProductCard categories={categories} prod={prod} />
          </Suspense>
        ))}
      </div>

      <div className="my-4 flex items-center justify-between">
        <h2 className="md:text-lg">
          page {page}/{totalPages}
        </h2>

        {totalPages > 1 ? (
          <div className="flex flex-row rounded-md border p-2">
            {+page > 1 ? (
              <Link
                className={
                  page !== 1 && nextPage !== totalPages
                    ? "flex flex-row items-center justify-center border-r px-2 md:text-lg"
                    : "flex flex-row items-center justify-center px-2 md:text-lg"
                }
                href={getPageUrl(prevPage)}
              >
                <HiMiniChevronLeft className="size-5 md:size-6" /> Prev
              </Link>
            ) : null}

            {+page < totalPages ? (
              <Link
                className="flex flex-row items-center justify-center px-2 md:text-lg"
                href={getPageUrl(nextPage)}
              >
                Next <HiMiniChevronRight className="size-5 md:size-6" />
              </Link>
            ) : null}
          </div>
        ) : null}
      </div>
    </div>
  );
}
