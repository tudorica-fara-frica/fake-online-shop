import { getCategoryById, getProductById } from "@/app/actions";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import Image from "next/image";
import { HiOutlineShoppingCart } from "react-icons/hi2";

export default async function Item({ params }) {
  const product_id = (await params).product_id;

  const product = await getProductById(product_id);
  const category = await getCategoryById(product.category_id);

  const photoSrc = `${process.env.UNSPLASH_URL}?query=${product.name}&page=1&client_id=${process.env.UNSPLASH_ACCESS_KEY}`;
  const res = await fetch(photoSrc);
  const { results } = await res.json();
  const photoUrl = results[0].urls.raw;

  return (
    <div className="min-h-screen">
      <Image
        width={800}
        height={800}
        src={photoUrl}
        className="max-h-[500px] min-h-[250px] object-cover object-center"
        alt="product photo"
      />

      <div className="flex flex-col gap-4 p-4">
        <div className="flex flex-col justify-between gap-2">
          <div className="flex flex-col gap-1">
            <h1 className="text-2xl font-semibold">{product.name}</h1>
            <Badge variant="secondary" className="self-start">
              Stock: {product.stock}
            </Badge>
          </div>

          <div className="flex flex-col gap-2">
            <Badge
              variant="outline"
              className="flex flex-row items-center justify-center gap-4 py-2 text-lg"
            >
              <HiOutlineShoppingCart className="h-8 w-8" />
              <span className="flex flex-col items-center justify-center">
                <span
                  className={
                    product.discount !== 0 ? "text-sm line-through" : ""
                  }
                >
                  {product.price} RON
                </span>
                {product.discount !== 0 ? (
                  <span>
                    {(Number(product.price) - Number(product.discount)).toFixed(
                      2,
                    )}{" "}
                    RON
                  </span>
                ) : null}
              </span>
            </Badge>
            {product.discount !== 0 ? (
              <Badge
                className="flex flex-col items-center justify-center p-1"
                variant="secondary"
              >
                <span className="text-sm">{product.discount} RON</span>
                <span>Discount</span>
              </Badge>
            ) : null}
          </div>
        </div>
        <Separator />
        <div>
          <h2 className="my-2 text-lg font-semibold">Details</h2>
          <p>
            <span className="font-medium">About:</span> {product.details}
          </p>
          <p>
            <span className="font-medium">Category:</span> {category.name}
          </p>
        </div>
      </div>
    </div>
  );
}
