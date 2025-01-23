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
    <div className="mx-4 mb-4 flex flex-col items-center justify-center gap-12 rounded-xl bg-muted px-12 py-28">
      <h1
        className={`text-center text-5xl font-bold leading-tight ${koulen.className}`}
      >
        Welcome to scco.p
      </h1>
      <p className="text-xl">
        Discover the latest sci-fi products for your future.
      </p>
      <Button size="lg">
        <Link href="/catalog?page=1">Explore Our Collection</Link>
      </Button>
    </div>
  );
}
