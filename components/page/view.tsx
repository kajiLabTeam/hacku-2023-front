import styles from "@/styles/view.module.scss";
import { shorts } from "@/sample/short";
import ShortViewer from "@/components/ui/shortViewer/shortViewer";
import {
  GoodFilledIcon,
  GoodIcon,
  HeartFilledIcon,
  HeartIcon,
  SmileIcon,
  SmileFilledIcon,
} from "@/components/icons/icon";
import { useEffect, useState } from "react";

export default function ViewPage() {
  const [currentIndex, setCurrentIndex] = useState(0);

  function dateComponent(date: string) {
    const d = new Date(date);
    const year = d.getFullYear();
    const month = d.getMonth() + 1;
    const day = d.getDate();

    return (
      <div className={styles.date_container}>
        <p className={styles.year}>{year}</p>
        <p className={styles.date}>
          {month}/{day}
        </p>
      </div>
    );
  }

  useEffect(() => {
    const viewer = document.getElementById("viewer");
    if (!viewer) return;

    viewer.onscroll = () => {
      const windowHigh = window.innerHeight;
      const scrollTop = viewer.scrollTop;
      setCurrentIndex(Math.round(scrollTop / windowHigh));
    };
  }, [setCurrentIndex]);

  return (
    <section className={styles.view} id="viewer">
      {shorts.map((short, index) => (
        <div className={styles.short} key={index}>
          <h1 className={styles.title}>{short.title}</h1>

          <div className={styles.container}>
            <ShortViewer
              short={short}
              shortIndex={index}
              isViewing={currentIndex === index}
            />

            <div className={styles.right}>
              {dateComponent(short.createdAt)}

              <div className={styles.reaction}>
                <HeartIcon className={styles.icon} />
                <GoodIcon className={styles.icon} />
                <SmileIcon className={styles.icon} />
              </div>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
}
