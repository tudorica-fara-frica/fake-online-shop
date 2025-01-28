import { Koulen } from "next/font/google";
import Link from "next/link";

const koulen = Koulen({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

export default function Footer() {
  return (
    <div className="flex flex-col gap-2 bg-secondary p-4">
      <Link
        href="/"
        className={`${koulen.className} text-xl font-medium tracking-tight`}
      >
        scco.p
      </Link>
      <div className="flex flex-col underline underline-offset-2">
        <Link href="/catalog">Catalog</Link>
        <Link href="/contact">Contact</Link>
        <Link href="/about">About</Link>
      </div>
      <h2 className="text-sm">
        Made by <span className="font-semibold">Rîmbu Tudor-Gabriel</span>
      </h2>
    </div>
  );
}
