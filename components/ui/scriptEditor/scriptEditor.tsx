import styles from "./scriptEditor.module.scss";
import usePostShort from "@/hooks/usePostShort";

type props = {
  className?: string;
  slideNumber: number;
};

export default function ScriptEditor({ className, slideNumber }: props) {
  const [short, { updateSlideScript }] = usePostShort();
  const slide = short.slides[slideNumber];

  return (
    <textarea
      className={`${styles.script_editor} ${className}`}
      value={slide.script}
      onChange={(e) => updateSlideScript(slideNumber, e.target.value)}
    />
  );
}
