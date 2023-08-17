import styles from "./viewComponent.module.scss";
import { shorts } from "@/sample/short";
import ShortViewer from "@/components/ui/shortViewer/shortViewer";
import { useEffect, useMemo, useState } from "react";
import { ShortObject } from "@/types";
import ShortInfoComponent from "../shortInfo/shortInfo";

type shortContentProps = {
  short: ShortObject;
  index: number;
  isViewing: boolean;
};

export default function ViewContainer() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const viewer = document.getElementById("viewer");
    if (!viewer) return;

    viewer.onscroll = () => {
      const windowHigh = window.innerHeight;
      const scrollTop = viewer.scrollTop;
      setCurrentIndex(Math.round(scrollTop / windowHigh));
    };
  }, [setCurrentIndex]);

  const ShortContent = ({ short, index, isViewing }: shortContentProps) => {
    const memoizedShortComponent = useMemo(
      () => (
        <ShortViewer short={short} shortIndex={index} isViewing={isViewing} />
      ),
      [short, index, isViewing]
    );
    return memoizedShortComponent;
  };

  const ShortInfo = ({ short }: { short: ShortObject }) => {
    const memoizedShortComponent = useMemo(
      () => <ShortInfoComponent short={short} />,
      [short]
    );
    return memoizedShortComponent;
  };

  return (
    <>
      {shorts.map((short, index) => (
        <div className={styles.short} key={short.id}>
          <div className={styles.inner_short}>
            <h1 className={styles.title}>{short.title}</h1>

            <div className={styles.container}>
              <ShortContent
                short={short}
                index={index}
                isViewing={index === currentIndex}
              />
              <ShortInfo short={short} key={index} />
            </div>
          </div>
        </div>
      ))}
    </>
  );
}
