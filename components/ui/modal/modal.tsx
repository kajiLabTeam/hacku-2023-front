import { useForm } from "@mantine/form";
import styles from "./modal.module.scss";
import { useState } from "react";
import { logout } from "@/components/firebase/auth";

export default function ModalComponent() {
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
    <div className={styles.modal}>
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
              addTag(searchTag);
              setSearchTag("");
            }
          }}
        />
      </div>

      <div className={styles.search_container}>
        <div className={styles.search}>
          検索
        </div>
      </div>
    </div>
  );
}
