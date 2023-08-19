import { useEffect } from "react";
import styles from "./logSlide.module.scss";
import { Marp } from "@marp-team/marp-core";
import { Text } from "@mantine/core";

type props = {
  markdown: string;
  views: string;
};

export default function LogSlideComponent({ markdown, views }: props) {
  const marp = new Marp();
  const { html, css } = marp.render(markdown);

  return (
    <>
      <style jsx>{css}</style>
      <div className={styles.slide}>
        <div dangerouslySetInnerHTML={{ __html: html }} />
        <div className={styles.played_container}>
          <Text color="white"  size="sm">{`${views}回視聴`}</Text>
        </div>
      </div>
    </>
  );
}
