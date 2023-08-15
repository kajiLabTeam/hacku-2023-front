import { useState } from "react";
import styles from "./shortSettingsCard.module.scss";
import { useForm } from "@mantine/form";
import { PinIcon } from "@/components/icons/icon";

type props = {
  className?: string;
};

export default function ShortSettingsCard({ className }: props) {
  const [searchTitle, setSearchTitle] = useState("");
  const [searchTag, setSearchTag] = useState("");
  const tags = useForm({
    initialValues: {
      employees: [],
    },
  });

  function addTag(tag: string) {
    const taglist = tags.values.employees as string[];

    if (taglist.includes(tag)) return;
    if (tag === "") return;

    tags.insertListItem("employees", tag);
  }

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
          value={searchTitle}
          onChange={(e) => setSearchTitle(e.target.value)}
        />
      </div>

      <div className={styles.tag_container}>
        <label className={styles.label} htmlFor="settings_tag">
          タグ
        </label>

        <div className={styles.tag_list}>
          {tags.values.employees.map((tag, index) => {
            return (
              <div
                key={tag}
                className={styles.tag_item}
                onClick={() => tags.removeListItem("employees", index)}
              >
                {tag}
              </div>
            );
          })}
        </div>

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
      </div>

      <div className={styles.settings_container}>
        <div className={styles.search}>投稿</div>
      </div>
    </div>
  );
}
