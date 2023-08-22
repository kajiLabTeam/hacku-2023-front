import { useState } from "react";
import styles from "./shortSettingsCard.module.scss";
import { PinIcon } from "@/components/icons/icon";
import usePostShort from "@/hooks/usePostShort";
import { Button, Dialog, Select } from "@mantine/core";
import { genres, genresKeys, genresValues, speakers } from "@/const";
import { Speaker } from "@/types";
import { useDisclosure, useHotkeys } from "@mantine/hooks";
import { fetchPostShort } from "@/components/api/short";
import { useRecoilValue } from "recoil";
import { userState } from "@/store/state";

export default function ShortSettingsCard() {
  const [opened, { toggle, close, open }] = useDisclosure(false);
  const [errText, setErrText] = useState("");
  const [searchTag, setSearchTag] = useState("");
  const [short, { init, addTag, deleteTag, setTitle, setSpeaker, setGenre }] =
    usePostShort();
  const tokenId = useRecoilValue(userState);

  // キーイベント
  useHotkeys([["esc", close]]);

  function openDialog(text: string) {
    setErrText(text);
    open();
  }

  function postShort() {
    if (short.title === "") {
      openDialog("タイトルを入力してください");
    } else if (short.tags.length === 0) {
      openDialog("タグを入力してください");
    } else if (short.genre === "") {
      openDialog("ジャンルを選択してください");
    } else if (short.speaker === undefined) {
      openDialog("スピーカーを選択してください");
    } else if (short.slides.length < 2) {
      openDialog("スライドを2枚以上追加してください");
    } else if (tokenId === null) {
      openDialog("トークンを取得できませんでした");
    } else {
      (async () => {
        await fetchPostShort(short, tokenId);
        openDialog("投稿しました");
        init();
      })();
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

      <div className={styles.settings_card}>
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
          <div className={styles.search} onClick={postShort}>
            投稿
          </div>
        </div>
      </div>
    </>
  );
}
