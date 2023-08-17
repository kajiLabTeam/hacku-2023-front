import styles from "@/styles/post.module.scss";
import ShortSettingsCard from "@/components/ui/shortSettingsCard/shortSettingsCard";
import usePostShort from "@/hooks/usePostShort";
import SlideEditorComponent from "@/components/ui/slideEditor/slideEditor";

export default function PostPage() {
  const [shorts, { addSlideAt, deleteSlideAt }] = usePostShort();

  return (
    <section className={styles.post}>
      <ShortSettingsCard className={styles.settings_card} />

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
