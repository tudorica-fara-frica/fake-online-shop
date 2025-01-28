import MainCategories from "@/components/main-categories";
import MainHero from "@/components/main-hero";
import { Separator } from "@/components/ui/separator";
import { Suspense } from "react";
import Loading from "./loading";

export default function Home() {
  return (
    <div className="min-h-screen">
      <MainHero />
      <Separator />
      <Suspense fallback={<Loading />}>
        <MainCategories />
      </Suspense>
    </div>
  );
}
