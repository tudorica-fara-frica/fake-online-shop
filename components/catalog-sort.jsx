"use client";

import { useRouter } from "next/navigation";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";

export default function CatalogSort() {
  const router = useRouter();

  return (
    <Select
      onValueChange={(value) => {
        const params = new URLSearchParams(window.location.search);
        params.set("sort_by", value);
        params.set("page", 1);
        router.push(`?${params.toString()}`);
      }}
    >
      <SelectTrigger className="w-auto text-base md:p-6 md:text-xl">
        <SelectValue placeholder="Sort"></SelectValue>
      </SelectTrigger>
      <SelectContent>
        <SelectItem className="md:text-lg" value="name-asc">
          name <span className="mr-2">↑</span>
        </SelectItem>
        <SelectItem className="md:text-lg" value="name-desc">
          name <span className="mr-2">↓</span>
        </SelectItem>
        <SelectItem className="md:text-lg" value="price-asc">
          price <span className="mr-2">↑</span>
        </SelectItem>
        <SelectItem className="md:text-lg" value="price-desc">
          price <span className="mr-2">↓</span>
        </SelectItem>
        <SelectItem className="md:text-lg" value="discount-asc">
          discount <span className="mr-2">↑</span>
        </SelectItem>
        <SelectItem className="md:text-lg" value="discount-desc">
          discount <span className="mr-2">↓</span>
        </SelectItem>
      </SelectContent>
    </Select>
  );
}
