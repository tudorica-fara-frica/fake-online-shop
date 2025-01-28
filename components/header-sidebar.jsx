"use client";

import { HiBars3 } from "react-icons/hi2";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Koulen } from "next/font/google";
import Link from "next/link";
import { useState } from "react";
import { X } from "lucide-react";
import { ModeToggle } from "./theme-switch-button";

const koulen = Koulen({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

export default function HeaderSidebar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Sheet open={isOpen}>
      <SheetTrigger onClick={() => setIsOpen(true)}>
        <HiBars3 className="size-8" />
      </SheetTrigger>
      <SheetContent className="flex flex-col justify-between">
        <SheetClose
          onClick={() => setIsOpen(false)}
          className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-secondary"
        >
          <X className="h-4 w-4" />
          <span className="sr-only">Close</span>
        </SheetClose>
        <SheetHeader>
          <SheetTitle>
            <Link
              href="/"
              className={`${koulen.className} text-4xl font-medium tracking-tight sm:text-5xl`}
              onClick={() => setIsOpen(false)}
            >
              scco.p
            </Link>
          </SheetTitle>
          <SheetDescription className="sm:text-lg">
            Your sci-fi shop.
          </SheetDescription>
        </SheetHeader>

        <div className="my-2 flex flex-col gap-2 text-2xl">
          <Link
            className="my-1 rounded border p-3 transition-all hover:bg-secondary"
            href="/catalog"
            onClick={() => setIsOpen(false)}
          >
            Catalog
          </Link>
          <Link
            className="my-1 rounded border p-3 transition-all hover:bg-secondary"
            href="/contact"
            onClick={() => setIsOpen(false)}
          >
            Contact
          </Link>
          <Link
            className="my-1 rounded border p-3 transition-all hover:bg-secondary"
            href="/about"
            onClick={() => setIsOpen(false)}
          >
            About
          </Link>
        </div>

        <div className="flex items-center justify-center">
          <ModeToggle />
        </div>
      </SheetContent>
    </Sheet>
  );
}
