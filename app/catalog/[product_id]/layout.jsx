import Loading from "@/app/loading";
import { Suspense } from "react";

export default function ItemPageLayout({ children }) {
  return (
    <>
      <Suspense fallback={<Loading />}>{children}</Suspense>
    </>
  );
}
