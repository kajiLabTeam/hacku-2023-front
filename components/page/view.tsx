import styles from "@/styles/view.module.scss";
import { Suspense, lazy } from "react";

export default function ViewPage() {
  const LazyedComponet = lazy(
    () => import("@/components/ui/viewComponent/viewComponent")
  );

  const Loading = () => <div className={styles.loading}>Loading...</div>;

  return (
    <section className={styles.view} id="viewer">
      <Suspense fallback={<Loading />}>
        <LazyedComponet />
      </Suspense>
    </section>
  );
}
