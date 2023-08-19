import { useState } from "react";
import styles from "./shortSettingsCard.module.scss";
import { PinIcon } from "@/components/icons/icon";
import usePostShort from "@/hooks/usePostShort";
import { Select } from "@mantine/core";
import { genres, genresKeys, genresValues, speakers } from "@/const";
import { Speaker } from "@/types";

type props = {
  className?: string;
};

export default function ShortSettingsCard({ className }: props) {
  const [searchTag, setSearchTag] = useState("");
  const [short, { addTag, deleteTag, setTitle, setSpeaker, setGenre }] =
    usePostShort();

  return (
    <div className={`${styles.settings_card} ${className}`}>
      <PinIcon className={styles.pin_icon} />

      <div className={styles.container}>
        <label className={styles.label} htmlFor="settings_title">
          タイトル
        </label>
        <input
          id="settings_title"
          type="text"
          className={styles.settings_title}
          value={short.title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>

      <div className={styles.tag_container}>
        <label className={styles.label} htmlFor="settings_tag">
          タグ
        </label>

        <input
          type="text"
          id="settings_tag"
          className={styles.settings_tag}
          value={searchTag}
          onChange={(e) => setSearchTag(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              addTag(searchTag);
              setSearchTag("");
            }
          }}
        />

        <div className={styles.tag_list}>
          {short.tags.map((tag, index) => {
            return (
              <div
                key={tag}
                className={styles.tag_item}
                onClick={() => deleteTag(index)}
              >
                {tag}
              </div>
            );
          })}
        </div>
      </div>

      <div className={styles.select_container}>
        <div className={styles.select_box}>
          <label className={styles.label} htmlFor="settings_genre">
            ジャンル
          </label>
          <Select
            id="settings_genre"
            className={styles.settings_genre}
            data={genresValues}
            onChange={(v) => {
              const g = genresKeys.find((key) => genres[key] === v) || "";
              setGenre(g);
            }}
            placeholder="select genre"
            searchable
            nothingFound="Nothing found"
          />
        </div>

        <div className={styles.select_box}>
          <label className={styles.label} htmlFor="settings_genre">
            スピーカー
          </label>
          <Select
            id="settings_genre"
            className={styles.settings_genre}
            data={speakers}
            defaultValue={speakers[0]}
            onChange={(v) => setSpeaker(v as Speaker)}
            placeholder="select speaker"
            searchable
            nothingFound="Nothing found"
          />
        </div>
      </div>

      <div className={styles.settings_container}>
        <div className={styles.search}>投稿</div>
      </div>
    </div>
  );
}
