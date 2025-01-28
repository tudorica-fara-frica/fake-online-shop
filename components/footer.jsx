import { Koulen } from "next/font/google";
import Link from "next/link";

const koulen = Koulen({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

export default function Footer() {
  return (
    <div className="flex flex-col gap-2 bg-secondary p-4 sm:flex-row sm:items-center sm:justify-between">
      <Link
        href="/"
        className={`${koulen.className} text-xl font-medium tracking-tight sm:text-3xl`}
      >
        scco.p
      </Link>
      <div className="flex flex-col underline underline-offset-2 sm:flex-row sm:gap-4 md:gap-8">
        <Link href="/catalog">Catalog</Link>
        <Link href="/contact">Contact</Link>
        <Link href="/about">About</Link>
      </div>
      <h2 className="text-sm">
        Made by{" "}
        <Link href="/contact" className="font-semibold">
          Rîmbu Tudor-Gabriel
        </Link>
      </h2>
    </div>
  );
}
