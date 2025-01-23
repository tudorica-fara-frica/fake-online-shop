import Image from "next/image";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Badge } from "./ui/badge";
import Link from "next/link";

export default async function CatalogProductCard({ prod, categories }) {
  function getProductInitials(productName) {
    const cleanedName = productName.replace(/sci-fi\s*/i, "").trim();
    const initials = cleanedName
      .split(" ")
      .map((word) => word[0])
      .join("");
    return initials.toUpperCase();
  }

  function getCategoryName(category_id) {
    const category = categories.find((cat) => cat.category_id === category_id);
    return category ? category.name : "Unknown Category";
  }

  const photoSrc = `${process.env.UNSPLASH_URL}?query=${prod.name}&page=1&client_id=${process.env.UNSPLASH_ACCESS_KEY}`;
  const res = await fetch(photoSrc);
  const { results } = await res.json();
  const photoUrl = results[0].urls.raw;

  return (
    <Link href={`/catalog/${prod.product_id}`}>
      <Card className="flex flex-col">
        <div className="p-2">
          <Image
            className="h-96 w-full max-w-96 rounded-md object-cover object-center"
            height={300}
            width={300}
            alt={`product ${prod.product_id} image`}
            src={photoUrl}
          />
        </div>
        <CardHeader>
          <CardTitle className="text-xl">{prod.name}</CardTitle>
          <CardDescription className="flex flex-col">
            <p>Category: {getCategoryName(prod.category_id)}</p>
            <p>Stock: {prod.stock}</p>
          </CardDescription>
        </CardHeader>
        <CardContent>
          <p>{prod.details}</p>
        </CardContent>
        <CardFooter className="flex flex-row items-center justify-between">
          <Badge className="flex flex-col items-center justify-center text-lg">
            <span
              className={prod.discount !== 0 ? "text-base line-through" : ""}
            >
              {prod.price} RON
            </span>
            {prod.discount !== 0 ? (
              <span>
                {(Number(prod.price) - Number(prod.discount)).toFixed(2)} RON
              </span>
            ) : null}
          </Badge>
          {prod.discount !== 0 ? (
            <Badge
              className="flex flex-col items-center justify-center p-1"
              variant="secondary"
            >
              <span className="text-sm">{prod.discount} RON</span>
              <span>Discount</span>
            </Badge>
          ) : null}
        </CardFooter>
      </Card>
    </Link>
  );
}
