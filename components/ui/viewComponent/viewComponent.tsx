import styles from "./viewComponent.module.scss";
import ShortViewer from "@/components/ui/shortViewer/shortViewer";
import { useEffect, useMemo, useState } from "react";
import { ShortObject } from "@/types";
import ShortInfoComponent from "@/components/ui/shortInfo/shortInfo";
import { shortsState, userState } from "@/store/state";
import { useRecoilState, useRecoilValue } from "recoil";
import { useIsSigned } from "@/components/firebase/auth";
import { fetchShorts } from "@/components/api/short";

type shortContentProps = {
  short: ShortObject;
  index: number;
  isViewing: boolean;
  scrollToNext: () => void;
};

export default function ViewContainer() {
  const [shorts, setShorts] = useRecoilState(shortsState);
  const [currentIndex, setCurrentIndex] = useState(0);
  const tokenId = useRecoilValue(userState);
  const isSigned = useIsSigned();

  function scrollToNext() {
    const viewer = document.getElementById("viewer");
    if (!viewer) return;

    viewer.scrollTo({
      top: window.innerHeight * (currentIndex + 1),
      behavior: "smooth",
    });
  }

  useEffect(() => {
    if (isSigned === undefined) return;
    if (currentIndex < shorts.length - 3) return;

    (async () => {
      const res = await fetchShorts(tokenId || null);
      setShorts((prev) => [...prev, ...res]);
    })();
  }, [currentIndex, tokenId, isSigned, shorts.length, setShorts]);

  useEffect(() => {
    const viewer = document.getElementById("viewer");
    if (!viewer) return;

    viewer.onscroll = () => {
      const windowHigh = window.innerHeight;
      const scrollTop = viewer.scrollTop;
      const index = Math.round(scrollTop / windowHigh);
      setCurrentIndex(index);
    };
  }, [setCurrentIndex]);

  const ShortContent = ({
    short,
    index,
    isViewing,
    scrollToNext,
  }: shortContentProps) => {
    const memoizedShortComponent = useMemo(
      () => (
        <ShortViewer
          short={short}
          shortIndex={index}
          isViewing={isViewing}
          scrollToNext={scrollToNext}
        />
      ),
      [short, index, isViewing, scrollToNext]
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
        <div className={styles.short} key={`${index}-${short.id}`}>
          <div className={styles.inner_short}>
            <h1 className={styles.title}>{short.title}</h1>

            <div className={styles.container}>
              <ShortContent
                short={short}
                index={index}
                isViewing={index === currentIndex}
                scrollToNext={scrollToNext}
              />
              <ShortInfo short={short} key={index} />
            </div>
          </div>
        </div>
      ))}
    </>
  );
}
