import { useForm } from "@mantine/form";
import styles from "./modal.module.scss";
import { useState } from "react";
import { Dialog } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { fetchShortsByTagsOrTitle } from "@/components/api/short";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { shortsState, userState } from "@/store/state";
import { Page } from "@/types";

export default function ModalComponent({
  setPage,
}: {
  setPage: (page: Page) => void;
}) {
  const [opened, { close, open }] = useDisclosure(false);
  const [errText, setErrText] = useState("");
  const [searchTitle, setSearchTitle] = useState("");
  const [searchTag, setSearchTag] = useState("");
  const tokenId = useRecoilValue(userState);
  const setShorts = useSetRecoilState(shortsState);
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

  function openDialog(text: string) {
    setErrText(text);
    open();
  }

  async function search() {
    if (searchTitle === "" && tags.values.employees.length === 0) {
      openDialog("タイトルまたはタグを入力してください");
      return;
    } else if (!tokenId) {
      openDialog("トークンがありません");
      return;
    }
    close();

    const res = await fetchShortsByTagsOrTitle(
      searchTitle,
      tags.values.employees.join(",")
    );

    if (res.length === 0) {
      openDialog("該当するショートがありません");
    } else {
      setShorts(res);
      setPage("view");
    }
  }

  return (
    <>
      <Dialog
        opened={opened}
        withCloseButton
        onClose={close}
        size="lg"
        radius="md"
      >
        <p>{errText}</p>
      </Dialog>

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
          <div className={styles.search} onClick={search}>
            検索
          </div>
        </div>
      </div>
    </>
  );
}
