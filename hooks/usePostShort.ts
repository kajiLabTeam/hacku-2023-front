import { speakers } from "@/const";
import { postShortState } from "@/store/state";
import {
  GenreKey,
  GenreValue,
  PostShortObject,
  PostSlideObject,
  Speaker,
} from "@/types";
import { useLocalStorage } from "@mantine/hooks";
import { useCallback, useEffect } from "react";
import { useRecoilState } from "recoil";

export default function usePostShort() {
  const [shortLocal, setShortLocal] = useLocalStorage<PostShortObject>({
    key: "short",
    defaultValue: {
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
    },
  });
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
  const addSlide = useCallback(() => {
    const newSlide: PostSlideObject = {
      script: "",
      slide: "",
    };
    setShorts({
      ...short,
      slides: [...short.slides, newSlide],
    });
  }, [setShorts, short]);

  // 途中にスライドを追加
  const addSlideAt = useCallback(
    (index: number) => {
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
    },
    [setShorts, short]
  );

  // スライドを削除
  const deleteSlideAt = useCallback(
    (index: number) => {
      const newSlides = [...short.slides];
      newSlides.splice(index, 1);
      setShorts({
        ...short,
        slides: newSlides,
      });
    },
    [setShorts, short]
  );

  // タイトルを更新
  const setTitle = useCallback(
    (title: string) => {
      setShorts({
        ...short,
        title: title,
      });
    },
    [setShorts, short]
  );

  // speakerを更新
  const setSpeaker = useCallback(
    (speaker: Speaker) => {
      setShorts({
        ...short,
        speaker: speaker,
      });
    },
    [setShorts, short]
  );

  // ジャンルを更新
  const setGenre = useCallback(
    (genre: GenreValue) => {
      setShorts({
        ...short,
        genre: genre,
      });
    },
    [setShorts, short]
  );

  // スライドを更新
  const updateSlideLayout = useCallback(
    (index: number, slide: string) => {
      const newSlides = structuredClone([...short.slides]);
      newSlides[index].slide = slide;
      setShorts({
        ...short,
        slides: newSlides,
      });
    },
    [setShorts, short]
  );

  // 台本を更新
  const updateSlideScript = useCallback(
    (index: number, script: string) => {
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
    },
    [setShorts, short]
  );

  // タグを追加
  const addTag = useCallback(
    (tag: string) => {
      const newTags = [...short.tags];
      newTags.push(tag);

      const uniqueTags = newTags.filter((x, i, self) => self.indexOf(x) === i);

      setShorts({
        ...short,
        tags: uniqueTags,
      });
    },
    [setShorts, short]
  );

  // タグを削除
  const deleteTag = useCallback(
    (index: number) => {
      const newTags = [...short.tags];
      newTags.splice(index, 1);
      setShorts({
        ...short,
        tags: newTags,
      });
    },
    [setShorts, short]
  );

  useEffect(() => {
    if (short.slides.length === 0) {
      init();
    }
  }, [init, short.slides.length]);

  useEffect(() => {
    setShortLocal(short);
  }, [setShortLocal, short]);

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
