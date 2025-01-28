import { Skeleton } from "./ui/skeleton";

export default function CatalogProductCardSkeleton() {
  return (
    <div className="px-4 py-2">
      <div className="flex flex-col gap-3 rounded-xl border p-2">
        <Skeleton className="h-48 w-full rounded-lg" />
        <div className="flex flex-col gap-2">
          <Skeleton className="h-6 w-4/5 rounded" />
          <div className="flex flex-col gap-1">
            <Skeleton className="h-3 w-3/5 rounded" />
            <Skeleton className="h-3 w-2/5 rounded" />
          </div>
        </div>
        <div className="flex flex-col gap-1">
          <Skeleton className="h-4 w-full rounded" />
          <Skeleton className="h-4 w-full rounded" />
          <Skeleton className="h-4 w-2/5 rounded" />
        </div>
        <div className="flex flex-row items-center justify-between">
          <Skeleton className="h-10 w-20 rounded" />
          <Skeleton className="h-6 w-28 rounded" />
        </div>
      </div>
    </div>
  );
}
