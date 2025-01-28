import Link from "next/link";
import { Koulen } from "next/font/google";
import HeaderSearchbar from "./header-searchbar";
import { ModeToggle } from "./theme-switch-button";
import HeaderSidebar from "./header-sidebar";

const koulen = Koulen({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

export default async function Header() {
  return (
    <header className="sticky left-0 top-0 z-50 flex w-full flex-row items-center justify-between gap-2 px-4 py-2 backdrop-blur-sm">
      <Link
        href="/"
        className={`${koulen.className} text-4xl font-medium tracking-tight`}
      >
        scco.p
      </Link>
      <HeaderSearchbar />
      <div className="hidden sm:block">
        <p>restul navigatiei</p>
      </div>
      <ModeToggle />
      <HeaderSidebar />
    </header>
  );
}
