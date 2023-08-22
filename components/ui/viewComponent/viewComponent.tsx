import styles from "./viewComponent.module.scss";
import ShortViewer from "@/components/ui/shortViewer/shortViewer";
import { useEffect, useMemo, useState } from "react";
import { ShortList, ShortObject } from "@/types";
import ShortInfoComponent from "@/components/ui/shortInfo/shortInfo";
import { fetchShorts } from "@/components/api/short";
import { userState } from "@/store/state";
import { useRecoilValue } from "recoil";
import { useIsSigned } from "@/components/firebase/auth";

type shortContentProps = {
  short: ShortObject;
  index: number;
  isViewing: boolean;
};

export default function ViewContainer() {
  const [shorts, setShorts] = useState<ShortList>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const tokenId = useRecoilValue(userState);
  const isSigned = useIsSigned();

  useEffect(() => {
    if (!isSigned) return;
    if (currentIndex < shorts.length - 3) return;

    (async () => {
      if (!tokenId) return;
      const res = await fetchShorts(tokenId);
      setShorts((prev) => [...prev, ...res]);
    })();
  }, [currentIndex, tokenId, isSigned, shorts.length]);

  useEffect(() => {
    console.log(shorts);
  }, [shorts]);

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
        <div className={styles.short} key={`${index}-${short.id}`}>
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
