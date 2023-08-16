import styles from "./mdEditor.module.scss";
import usePostShort from "@/hooks/usePostShort";

type props = {
  className?: string;
  slideNumber: number;
};

export default function MdEditorComponent({ className, slideNumber }: props) {
  const [short, { updateSlideLayout }] = usePostShort();
  const slide = short.slides[slideNumber];

  return (
    <textarea
      className={`${styles.md_editor} ${className}`}
      placeholder="スライドレイアウト"
      value={slide.slide}
      onChange={(e) => updateSlideLayout(slideNumber, e.target.value)}
    />
  );
}
