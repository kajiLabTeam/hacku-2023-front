import styles from "./slide.module.scss";
import { Marp } from "@marp-team/marp-core";

type props = {
  markdown: string;
};

export default function SlideComponent({ markdown }: props) {
  const marp = new Marp();
  const { html, css } = marp.render(markdown);

  return (
    <>
      <style jsx>{css}</style>

      <div className={styles.slide}>
        <div dangerouslySetInnerHTML={{ __html: html }} />
      </div>
    </>
  );
}
