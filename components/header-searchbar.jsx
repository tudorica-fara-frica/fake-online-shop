"use client";

import { useRouter } from "next/navigation";
import { Input } from "./ui/input";
import { HiMagnifyingGlass } from "react-icons/hi2";

export default function HeaderSearchbar() {
  const router = useRouter();

  function onSearchSubmit(formData) {
    const params = new URLSearchParams(window.location.search);

    const searchQuery = formData.get("searchQuery");

    if (searchQuery.trim()) {
      params.set("search", searchQuery);
    } else {
      params.delete("search");
    }
    params.set("page", 1);
    router.push(`/catalog?${params.toString()}`);
  }

  return (
    <>
      <form
        action={onSearchSubmit}
        className="flex flex-row items-center rounded-md border focus-within:outline-none focus-within:ring-1 focus-within:ring-ring"
      >
        <Input
          className="border-none bg-inherit focus-visible:ring-0"
          type="search"
          placeholder="Search..."
          name="searchQuery"
        />
        <button className="px-3" type="submit">
          <HiMagnifyingGlass />
        </button>
      </form>
    </>
  );
}
