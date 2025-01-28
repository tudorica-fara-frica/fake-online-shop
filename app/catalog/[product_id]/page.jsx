import {
  getCategoryById,
  getPhotoById,
  getProductById,
  getRecommendedProductsByProductIdAndCategoryId,
  getReviewsById,
} from "@/app/actions";
import ItemCategories from "@/components/item-categories";
import ItemProductCard from "@/components/item-product-card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import Image from "next/image";
import { connection } from "next/server";
import { HiOutlineShoppingCart } from "react-icons/hi2";

export default async function Item({ params }) {
  await connection();

  const product_id = (await params).product_id;

  const product = await getProductById(product_id);
  const category = await getCategoryById(product.category_id);

  const photoUrl = await getPhotoById(product_id);

  const reviews = await getReviewsById(product_id);

  const recommendedProducts =
    await getRecommendedProductsByProductIdAndCategoryId({
      category_id: product.category_id,
      product_id,
    });

  return (
    <div className="min-h-screen">
      <Image
        width={800}
        height={800}
        src={photoUrl.publicUrl}
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

        <Separator />

        <div>
          <h2 className="my-2 text-lg font-semibold">Reviews</h2>
          {reviews.length > 0 ? (
            reviews.map((rev) => {
              return (
                <p
                  key={rev.content}
                  className="my-2 rounded border p-3 font-medium"
                >
                  {rev.content}
                </p>
              );
            })
          ) : (
            <p>No reviews for now...</p>
          )}
        </div>

        <Separator />

        <div>
          <h2 className="my-2 text-lg font-semibold">You may also like</h2>
          <div className="flex flex-row gap-2 overflow-x-auto">
            {recommendedProducts.map((pr) => {
              return (
                <div className="flex-shrink-0 self-stretch" key={pr.product_id}>
                  <ItemProductCard prod={pr} />
                </div>
              );
            })}
          </div>
        </div>

        <Separator />

        <div>
          <h2 className="my-2 text-lg font-semibold">
            Browse other categories
          </h2>
          <ItemCategories category_id={product.category_id} />
        </div>
      </div>
    </div>
  );
}
