import styles from "./shortViewer.module.scss";
import { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import { ShortObject } from "@/types";
import SlideComponent from "@/components/ui/slide/slide";
import { useFocusTrap, useHotkeys } from "@mantine/hooks";
import { playingState } from "@/store/state";
import { usePlayingSound } from "@/hooks/usePlayingSound";

type props = {
  isViewing: boolean;
  shortIndex: number;
  short: ShortObject;
  scrollToNext: () => void;
};

export default function ShortViewer({
  isViewing,
  shortIndex,
  short,
  scrollToNext,
}: props) {
  const [sounds, setSounds] = useState<HTMLAudioElement[]>([]);
  const [playing, setPlaying] = useRecoilState(playingState);
  const [_, { setPlayingSound, switchShort }] = usePlayingSound();
  const [slideIndex, setSlideIndex] = useState(0);
  const focusTrapRef = useFocusTrap(isViewing);

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

  // 音声リストを取得
  useEffect(() => {
    const soundUrls = short.slides.map((slide) => slide.voiceURL);
    const s = soundUrls.map((url) => new Audio(url));
    setSounds(s);
  }, [short.slides]);

  // スライドに合わせて再生する
  useEffect(() => {
    if (!isViewing || sounds.length === 0) return;

    sounds.map((s) => s.pause());

    if (!playing) return;

    setPlayingSound(sounds[slideIndex]);
    sounds[slideIndex]?.addEventListener("ended", () => {
      const shortEle = document.getElementById(`short-${shortIndex}`);
      if (!shortEle) return;
      
      if (slideIndex >= sounds.length - 1) scrollToNext();
      else {
        shortEle.scrollTo({
          left: shortEle.clientWidth * (slideIndex + 1),
          behavior: "smooth",
        });
      }
    });
  }, [isViewing, playing, scrollToNext, setPlayingSound, shortIndex, slideIndex, sounds]);

  // スライドが切り替わった場合は再生位置を戻す
  useEffect(() => {
    if (!isViewing) return;

    sounds.map((s) => (s.currentTime = 0));
  }, [isViewing, slideIndex, sounds]);

  // ショートが切り替わったら再生停止
  useEffect(() => {
    if (isViewing) switchShort(shortIndex);
  }, [isViewing, shortIndex, switchShort]);

  return (
    <div className={styles.short_viewr}>
      <div
        className={styles.short_container}
        id={`short-${shortIndex}`}
        ref={focusTrapRef}
        tabIndex={0}
      >
        {short.slides.map((slide, index) => (
          <SlideComponent
            markdown={slide.slide}
            key={index}
            onClick={() => setPlaying((v) => !v)}
          />
        ))}
      </div>

      {!playing && (
        <div className={styles.overlay}>
          <div className={styles.play}></div>
        </div>
      )}

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
