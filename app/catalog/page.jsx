import CatalogProducts from "@/components/catalog-products";
import { getCategories, getProducts } from "../actions";
import CatalogFilter from "@/components/catalog-filter";
import { Card } from "@/components/ui/card";
import CatalogSort from "@/components/catalog-sort";

export default async function Catalog({ searchParams }) {
  const urlSearchParams = await searchParams;
  const category_id = urlSearchParams?.category_id || null;
  const has_discount = urlSearchParams?.has_discount || null;
  const max_price = urlSearchParams?.max_price || null;
  const sort_by = urlSearchParams?.sort_by || "name-asc";
  const search = urlSearchParams?.search || null;
  const page = urlSearchParams?.page || 1;

  const categories = await getCategories();
  const products = await getProducts();
  let filteredProducts = products;

  if (search) {
    filteredProducts = filteredProducts.filter((prod) => {
      const categoryName =
        categories.find((cat) => cat.category_id === prod.category_id)?.name ||
        "";
      return (
        prod.name.toLowerCase().includes(search.toLowerCase()) ||
        categoryName.toLowerCase().includes(search.toLowerCase())
      );
    });
  }

  if (category_id) {
    const categoryIds = category_id.split(",").map(Number);
    filteredProducts = filteredProducts.filter((prod) =>
      categoryIds.includes(Number(prod.category_id)),
    );
  }

  if (has_discount !== null) {
    filteredProducts = filteredProducts.filter((prod) =>
      has_discount === "true" ? prod.discount > 0 : prod.discount === 0,
    );
  }

  if (max_price) {
    filteredProducts = filteredProducts.filter(
      (prod) =>
        (Number(prod.price) - Number(prod.discount)).toFixed(2) <= +max_price,
    );
  }

  const sorteazaProduse = (filteredProducts, sort_by) => {
    return filteredProducts.sort((a, b) => {
      let comparatie = 0;
      const [campo, ordine] = sort_by.split("-");

      switch (campo) {
        case "name":
          comparatie = a.name.localeCompare(b.name);
          break;
        case "price":
          comparatie =
            (Number(a.price) - Number(a.discount)).toFixed(2) -
            (Number(b.price) - Number(b.discount)).toFixed(2);
          break;
        case "discount":
          comparatie = a.discount - b.discount;
          break;
        default:
          break;
      }

      if (ordine === "desc") {
        comparatie *= -1;
      }

      return comparatie;
    });
  };

  filteredProducts = sorteazaProduse(filteredProducts, sort_by);

  return (
    <>
      <Card className="m-4 px-4 py-2">
        <h1 className="text-lg font-semibold">
          {filteredProducts.length} results
        </h1>
        <h2 className="text-base">
          Showing {(page - 1) * 10 + 1} →{" "}
          {page * 10 > filteredProducts.length
            ? filteredProducts.length
            : page * 10}
        </h2>
      </Card>

      <Card className="m-4 flex flex-row items-center justify-between gap-2 p-2">
        <CatalogFilter />
        <CatalogSort />
      </Card>

      <CatalogProducts
        page={page}
        categories={categories}
        products={filteredProducts}
      />
    </>
  );
}
