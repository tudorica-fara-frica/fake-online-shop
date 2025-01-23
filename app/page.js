import MainCategories from "@/components/main-categories";
import MainHero from "@/components/main-hero";
import { Separator } from "@/components/ui/separator";
import { Suspense } from "react";
import Loading from "./loading";
import {
  getProducts,
  insertDemoCategories,
  insertDemoProducts,
} from "./actions";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <>
      <MainHero />
      <Separator />
      <Suspense fallback={<Loading />}>
        <MainCategories />
      </Suspense>
      <Separator />
      <form
        className="flex items-center justify-center p-4"
        action={insertDemoCategories}
      >
        <Button>Add Dummy Categories</Button>
      </form>
      <form
        className="flex items-center justify-center p-4"
        action={insertDemoProducts}
      >
        <Button>Add Dummy Products</Button>
      </form>
      <form
        className="flex items-center justify-center p-4"
        action={getProducts}
      >
        <Button>Get All Products</Button>
      </form>
      {/* <Separator />
      <p>Recommended products</p> */}
    </>
  );
}
