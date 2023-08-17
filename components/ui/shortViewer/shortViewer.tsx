import styles from "./shortViewer.module.scss";
import { ShortObject } from "@/types";
import SlideComponent from "@/components/ui/slide/slide";
import { useEffect, useState } from "react";
import { useFocusTrap, useHotkeys } from "@mantine/hooks";

type props = {
  isViewing: boolean;
  shortIndex: number;
  short: ShortObject;
};

export default function ShortViewer({ isViewing, shortIndex, short }: props) {
  const [slideIndex, setSlideIndex] = useState(0);
  const focusTrapRef = useFocusTrap(isViewing);
  const [sounds, setSounds] = useState<HTMLAudioElement[]>([]);

  // スライドを移動
  function scrollToSlide(index: number) {
    const short = document.getElementById(`short-${shortIndex}`);

    if (!short) return;

    const elementWidth = short.clientWidth;
    short.scrollTo({
      left: elementWidth * index,
      behavior: "smooth",
    });
  }

  // 前のスライドに移動
  function prevSlide() {
    if (slideIndex !== 0) scrollToSlide(slideIndex - 1);
  }

  // 次のスライドに移動
  function nextSlide() {
    if (slideIndex !== short.slides.length - 1) scrollToSlide(slideIndex + 1);
  }

  // キーイベント
  useHotkeys([
    ["left", prevSlide],
    ["right", nextSlide],
  ]);

  // スライドのスクロール
  useEffect(() => {
    const short = document.getElementById(`short-${shortIndex}`);
    if (!short) return;

    short.onscroll = () => {
      const elementWidth = short.clientWidth;
      const scrollLeft = short.scrollLeft;
      setSlideIndex(Math.round(scrollLeft / elementWidth));
    };
  }, [setSlideIndex, shortIndex]);

  useEffect(() => {
    const soundUrls = short.slides.map((slide) => slide.voiceURL);
    const s = soundUrls.map((url) => new Audio(url));
    setSounds(s);
  }, [short.slides]);

  // 再生
  useEffect(() => {
    if (!isViewing) return;
    sounds[slideIndex]?.play();
    sounds[slideIndex]?.addEventListener("ended", () => {
      const shortEle = document.getElementById(`short-${shortIndex}`);
      if (!shortEle) return;
      shortEle.scrollTo({
        left: shortEle.clientWidth * (slideIndex + 1),
        behavior: "smooth",
      });
    });
  }, [isViewing, shortIndex, slideIndex, sounds]);

  return (
    <div className={styles.short_viewr}>
      <div
        className={styles.short_container}
        id={`short-${shortIndex}`}
        ref={focusTrapRef}
        tabIndex={0}
      >
        {short.slides.map((slide, index) => (
          <SlideComponent markdown={slide.slide} key={index} />
        ))}
      </div>

      <div className={styles.pointer}>
        {Array(short.slides.length)
          .fill(0)
          .map((_, index) => (
            <span
              onClick={() => scrollToSlide(index)}
              data-current={slideIndex === index}
              key={index}
            ></span>
          ))}
      </div>
    </div>
  );
}
