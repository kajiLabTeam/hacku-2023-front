import styles from "./slide.module.scss";
import { Marp } from "@marp-team/marp-core";

type props = {
  markdown: string;
  onClick?: () => void;
};

export default function SlideComponent({ markdown, onClick }: props) {
  const marp = new Marp();
  const { html, css } = marp.render(markdown);

  return (
    <>
      <style jsx>{css}</style>

      <div className={styles.slide} onClick={onClick}>
        <div dangerouslySetInnerHTML={{ __html: html }} />
      </div>
    </>
  );
}
