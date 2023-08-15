import { postShortState } from "@/store/state";
import { PostSlideObject } from "@/types";
import { useCallback, useEffect } from "react";
import { useRecoilState } from "recoil";

export default function usePostShort() {
  const [short, setShorts] = useRecoilState(postShortState);

  const init = useCallback(() => {
    setShorts({
      title: "",
      slides: [
        {
          script: "",
          slide: "",
        },
      ],
      tags: [],
    });
  }, [setShorts]);

  // 最後にスライドを追加
  function addSlide() {
    const newSlide: PostSlideObject = {
      script: "",
      slide: "",
    };
    setShorts({
      title: short.title,
      slides: [...short.slides, newSlide],
      tags: short.tags,
    });
  }

  // 途中にスライドを追加
  function addSlideAt(index: number) {
    const newSlide: PostSlideObject = {
      script: "",
      slide: "",
    };
    const newSlides = [...short.slides];
    newSlides.splice(index, 0, newSlide);
    setShorts({
      title: short.title,
      slides: newSlides,
      tags: short.tags,
    });
  }

  // スライドを削除
  function deleteSlideAt(index: number) {
    const newSlides = [...short.slides];
    newSlides.splice(index, 1);
    setShorts({
      title: short.title,
      slides: newSlides,
      tags: short.tags,
    });
  }

  // タイトルを更新
  function setTitle(title: string) {
    setShorts({
      title: title,
      slides: short.slides,
      tags: short.tags,
    });
  }

  // スライドを更新
  function updateSlideLayout(index: number, slide: string) {
    const newSlides = structuredClone([...short.slides]);
    newSlides[index].slide = slide;
    setShorts({
      title: short.title,
      slides: newSlides,
      tags: short.tags,
    });
  }

  // 台本を更新
  function updateSlideScript(index: number, script: string) {
    let count = script.split("\n").length;
    for (const line of script.split("\n")) {
      if (line.length > 23) count++;
    }

    if (count < 14) {
      const newSlides = structuredClone([...short.slides]);
      newSlides[index].script = script;
      setShorts({
        title: short.title,
        slides: newSlides,
        tags: short.tags,
      });
    }
  }

  // タグを追加
  function addTag(tag: string) {
    const newTags = [...short.tags];
    newTags.push(tag);

    const uniqueTags = newTags.filter((x, i, self) => self.indexOf(x) === i);

    setShorts({
      title: short.title,
      slides: short.slides,
      tags: uniqueTags,
    });
  }

  // タグを削除
  function deleteTag(index: number) {
    const newTags = [...short.tags];
    newTags.splice(index, 1);
    setShorts({
      title: short.title,
      slides: short.slides,
      tags: newTags,
    });
  }

  useEffect(() => {
    if (short.slides.length === 0) {
      init();
    }
  }, [init, short.slides.length]);

  return [
    short,
    {
      init,
      addSlide,
      addSlideAt,
      deleteSlideAt,
      setTitle,
      updateSlideLayout,
      updateSlideScript,
      addTag,
      deleteTag,
    },
  ] as const;
}
