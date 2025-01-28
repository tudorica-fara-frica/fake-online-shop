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
    <div className="grid grid-cols-1 gap-4 px-4">
      {paginatedProducts.map((prod) => (
        <Suspense
          key={prod.product_id}
          fallback={<CatalogProductCardSkeleton />}
        >
          <CatalogProductCard categories={categories} prod={prod} />
        </Suspense>
      ))}

      <div className="mb-4 flex items-center justify-between">
        {totalPages > 1 ? (
          <div className="flex flex-row rounded-md border p-2">
            {+page > 1 ? (
              <Link
                className={
                  page !== 1 && nextPage !== totalPages
                    ? "flex flex-row items-center justify-center border-r px-2"
                    : "flex flex-row items-center justify-center px-2"
                }
                href={getPageUrl(prevPage)}
              >
                <HiMiniChevronLeft className="h-5 w-5" /> Prev
              </Link>
            ) : null}

            {+page < totalPages ? (
              <Link
                className="flex flex-row items-center justify-center px-2"
                href={getPageUrl(nextPage)}
              >
                Next <HiMiniChevronRight className="h-5 w-5" />
              </Link>
            ) : null}
          </div>
        ) : null}
        <h2>
          page {page}/{totalPages}
        </h2>
      </div>
    </div>
  );
}
