import { Koulen } from "next/font/google";
import Link from "next/link";
import { Button } from "./ui/button";

const koulen = Koulen({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

export default function MainHero() {
  return (
    <div className="mx-4 mb-4 flex flex-col items-center justify-center gap-12 rounded-xl bg-muted px-12 py-28 sm:gap-16 sm:px-16 sm:py-44 md:gap-24 md:px-24 md:py-64">
      <h1
        className={`text-center text-5xl font-bold leading-tight md:text-7xl ${koulen.className}`}
      >
        Welcome to scco.p
      </h1>
      <p className="text-xl md:text-3xl">
        Discover the latest sci-fi products for your future.
      </p>
      <Button size="lg" className="sm:p-6 sm:text-xl md:p-10 md:text-3xl">
        <Link href="/catalog?page=1">Explore Our Collection</Link>
      </Button>
    </div>
  );
}
