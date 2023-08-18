import styles from "@/styles/post.module.scss";
import ShortSettingsCard from "@/components/ui/shortSettingsCard/shortSettingsCard";
import usePostShort from "@/hooks/usePostShort";
import SlideEditorComponent from "@/components/ui/slideEditor/slideEditor";
import { usePlayingSound } from "@/hooks/usePlayingSound";
import { useEffect } from "react";

export default function PostPage() {
  const [shorts, { addSlideAt, deleteSlideAt }] = usePostShort();
  const [_, { switchShort }] = usePlayingSound();

  useEffect(() => {
    switchShort(-1);
  }, [switchShort]);

  return (
    <section className={styles.post}>
      <ShortSettingsCard />

      {shorts.slides.map((slide, index) => {
        return (
          <SlideEditorComponent
            key={index}
            index={index}
            slide={slide}
            addSlideAt={addSlideAt}
            deleteSlideAt={deleteSlideAt}
          />
        );
      })}
    </section>
  );
}
