"use client";

import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { X } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "./ui/button";
import { useState, useTransition } from "react";
import { redirect, useRouter } from "next/navigation";
import { Checkbox } from "./ui/checkbox";
import { Separator } from "./ui/separator";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Slider } from "./ui/slider";

export default function CatalogFilter() {
  const router = useRouter();

  const [isOpen, setIsOpen] = useState(false);

  const [categories, setCategories] = useState([]);
  const [price, setPrice] = useState();
  const [visiblePrice, setVisiblePrice] = useState(price);
  const [discount, setDiscount] = useState();

  const [isPending, startTransition] = useTransition();

  function handleCheckboxChange(value) {
    setCategories((prev) =>
      prev.includes(value)
        ? prev.filter((categories) => categories !== value)
        : [...prev, value],
    );
  }

  function handleSubmit() {
    const params = new URLSearchParams(window.location.search);

    if (categories.length > 0) {
      params.set("category_id", categories.join(","));
    }

    if (price) {
      params.set("max_price", price);
    }

    if (discount) {
      params.set("has_discount", discount);
    }

    params.set("page", 1);

    startTransition(() => {
      router.push(`?${params.toString()}`);
      setIsOpen(false);
      setCategories([]);
      setDiscount();
      setPrice();
      setVisiblePrice(price);
    });
  }

  return (
    <Sheet open={isOpen}>
      <SheetTrigger
        className="self-start rounded-lg border px-4 py-2"
        onClick={() => setIsOpen(true)}
      >
        Filter
      </SheetTrigger>
      <SheetContent>
        <SheetClose
          onClick={() => setIsOpen(false)}
          disabled={isPending}
          className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-secondary"
        >
          <X className="h-4 w-4" />
          <span className="sr-only">Close</span>
        </SheetClose>

        <SheetHeader>
          <SheetTitle>Filters</SheetTitle>
        </SheetHeader>

        <Separator className="my-4" />

        <form action={handleSubmit}>
          <Select
            aria-placeholder="Discount"
            onValueChange={(value) => {
              setDiscount(value === "all" ? "" : value);
            }}
          >
            <SelectTrigger>
              <SelectValue placeholder="Discount" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All</SelectItem>
              <SelectItem value="true">Yes</SelectItem>
              <SelectItem value="false">No</SelectItem>
            </SelectContent>
          </Select>

          <Separator className="my-4" />

          <Accordion collapsible className="space-y-2">
            <AccordionItem value="cat-1">
              <AccordionTrigger>Categories</AccordionTrigger>
              <AccordionContent>
                <div className="flex items-center">
                  <Checkbox
                    id="books"
                    checked={categories.includes("1")}
                    onCheckedChange={() => handleCheckboxChange("1")}
                  />
                  <label htmlFor="books" className="ml-2">
                    Books
                  </label>
                </div>
                <div className="flex items-center">
                  <Checkbox
                    id="movies"
                    checked={categories.includes("2")}
                    onCheckedChange={() => handleCheckboxChange("2")}
                  />
                  <label htmlFor="movies" className="ml-2">
                    Movies
                  </label>
                </div>
                <div className="flex items-center">
                  <Checkbox
                    id="action-figures"
                    checked={categories.includes("3")}
                    onCheckedChange={() => handleCheckboxChange("3")}
                  />
                  <label htmlFor="action-figures" className="ml-2">
                    Action Figures
                  </label>
                </div>
                <div className="flex items-center">
                  <Checkbox
                    id="board-games"
                    checked={categories.includes("4")}
                    onCheckedChange={() => handleCheckboxChange("4")}
                  />
                  <label htmlFor="board-games" className="ml-2">
                    Board Games
                  </label>
                </div>
                <div className="flex items-center">
                  <Checkbox
                    id="video-games"
                    checked={categories.includes("5")}
                    onCheckedChange={() => handleCheckboxChange("5")}
                  />
                  <label htmlFor="video-games" className="ml-2">
                    Video Games
                  </label>
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>

          <Separator className="my-4" />

          <div className="flex flex-col gap-2">
            <h2>Price</h2>
            <Slider
              defaultValue={[price]}
              min={0}
              max={100}
              step={[5]}
              onValueChange={(value) => {
                setVisiblePrice(value[0]);
              }}
              onValueCommit={(value) => {
                setPrice(value[0]);
              }}
            />
            <p>{visiblePrice}</p>
          </div>

          <Separator className="my-4" />

          <Button disabled={isPending}>Filter</Button>

          {isPending ? (
            <>
              <Separator className="my-4" />
              <p className="flex flex-row items-center justify-center gap-4 p-2">
                Applying filters<span className="loader"></span>
              </p>
            </>
          ) : null}
        </form>
      </SheetContent>
    </Sheet>
  );
}
