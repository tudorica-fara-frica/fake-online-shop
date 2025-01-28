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
import { getPhotoById } from "@/app/actions";
import { connection } from "next/server";

export default async function ItemProductCard({ prod }) {
  await connection();

  const photoUrl = await getPhotoById(prod.product_id);

  return (
    <Link className="h-full" href={`/catalog/${prod.product_id}`}>
      <Card className="flex h-full w-52 flex-col">
        <div className="flex items-center justify-center p-2">
          <Image
            className="h-40 w-full rounded-md object-cover object-center"
            height={300}
            width={300}
            alt={`product ${prod.product_id} image`}
            src={photoUrl.publicUrl}
          />
        </div>
        <div className="flex h-full flex-col justify-between">
          <CardHeader>
            <CardTitle className="text-lg">{prod.name}</CardTitle>
            <CardDescription className="flex flex-col text-xs">
              <p>Stock: {prod.stock}</p>
            </CardDescription>
          </CardHeader>
          <CardContent className="text-sm">
            <p>{prod.details}</p>
          </CardContent>
          <CardFooter className="flex flex-col items-center justify-between">
            {prod.discount !== 0 ? (
              <Badge
                className="flex flex-row items-center justify-center p-1 text-sm"
                variant="secondary"
              >
                {prod.discount} RON Discount
              </Badge>
            ) : null}
            <Badge className="flex flex-col items-center justify-center text-base">
              {(Number(prod.price) - Number(prod.discount)).toFixed(2)} RON
            </Badge>
          </CardFooter>
        </div>
      </Card>
    </Link>
  );
}
