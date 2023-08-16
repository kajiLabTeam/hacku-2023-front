import { speakers } from "@/const";
import { postShortState } from "@/store/state";
import { GenreKey, PostSlideObject, Speaker } from "@/types";
import { useCallback, useEffect } from "react";
import { useRecoilState } from "recoil";

export default function usePostShort() {
  const [short, setShorts] = useRecoilState(postShortState);

  const init = useCallback(() => {
    setShorts({
      title: "",
      speaker: speakers[0],
      slides: [
        {
          script: "",
          slide: "",
        },
      ],
      tags: [],
      genre: "",
    });
  }, [setShorts]);

  // 最後にスライドを追加
  function addSlide() {
    const newSlide: PostSlideObject = {
      script: "",
      slide: "",
    };
    setShorts({
      ...short,
      slides: [...short.slides, newSlide],
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
      ...short,
      slides: newSlides,
    });
  }

  // スライドを削除
  function deleteSlideAt(index: number) {
    const newSlides = [...short.slides];
    newSlides.splice(index, 1);
    setShorts({
      ...short,
      slides: newSlides,
    });
  }

  // タイトルを更新
  function setTitle(title: string) {
    setShorts({
      ...short,
      title: title,
    });
  }

  // speakerを更新
  function setSpeaker(speaker: Speaker) {
    setShorts({
      ...short,
      speaker: speaker,
    });
  }

  // ジャンルを更新
  function setGenre(genre: GenreKey) {
    setShorts({
      ...short,
      genre: genre,
    });
  }

  // スライドを更新
  function updateSlideLayout(index: number, slide: string) {
    const newSlides = structuredClone([...short.slides]);
    newSlides[index].slide = slide;
    setShorts({
      ...short,
      slides: newSlides,
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
        ...short,
        slides: newSlides,
      });
    }
  }

  // タグを追加
  function addTag(tag: string) {
    const newTags = [...short.tags];
    newTags.push(tag);

    const uniqueTags = newTags.filter((x, i, self) => self.indexOf(x) === i);

    setShorts({
      ...short,
      tags: uniqueTags,
    });
  }

  // タグを削除
  function deleteTag(index: number) {
    const newTags = [...short.tags];
    newTags.splice(index, 1);
    setShorts({
      ...short,
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
      setSpeaker,
      setGenre,
      updateSlideLayout,
      updateSlideScript,
      addTag,
      deleteTag,
    },
  ] as const;
}
