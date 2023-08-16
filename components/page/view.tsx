import styles from "@/styles/view.module.scss";
import { shorts } from "@/sample/short";
import SlideComponent from "@/components/ui/slide/slide";
import {
  GoodFilledIcon,
  GoodIcon,
  HeartFilledIcon,
  HeartIcon,
  SmileIcon,
  SmileFilledIcon,
} from "@/components/icons/icon";

export default function ViewPage() {
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

  return (
    <section className={styles.view}>
      {shorts.map((short, index) => (
        <div className={styles.short} key={index}>
          <h1 className={styles.title}>{short.title}</h1>

          <div className={styles.container}>
            <div className={styles.left}>
              <div className={styles.short_container}>
                {short.slides.map((slide, index) => (
                  <SlideComponent markdown={slide.slide} key={index} />
                ))}
              </div>
            </div>

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
