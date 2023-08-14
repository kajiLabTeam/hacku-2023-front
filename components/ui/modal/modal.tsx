import { useForm } from "@mantine/form";
import styles from "./modal.module.scss";
import { useState } from "react";

export default function ModalComponent() {
  const [searchTitle, setSearchTitle] = useState("");
  const [searchTag, setSearchTag] = useState("");
  const tags = useForm({
    initialValues: {
      employees: [],
    },
  });

  return (
    <>
      <div className={styles.container}>
        <label className={styles.label} htmlFor="search_title">
          タイトル検索
        </label>
        <input
          id="search_title"
          type="text"
          className={styles.search_title}
          value={searchTitle}
          onChange={(e) => setSearchTitle(e.target.value)}
        />
      </div>

      <div className={styles.container}>
        <label className={styles.label} htmlFor="search_tag">
          タグ検索
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
          id="search_tag"
          className={styles.search_tag}
          value={searchTag}
          onChange={(e) => setSearchTag(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              tags.insertListItem("employees", searchTag);
              setSearchTag("");
            }
          }}
        />
      </div>

      <div className={styles.search_container}>
        <div className={styles.search}>検索</div>
      </div>
    </>
  );
}
