import { Suspense } from "react";
import Loading from "../loading";

export default function CatalogLayout({ children }) {
  return (
    <>
      <Suspense fallback={<Loading />}>{children}</Suspense>
    </>
  );
}
