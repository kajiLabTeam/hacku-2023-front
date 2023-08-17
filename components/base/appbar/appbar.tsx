import {
  AccountCircleIcon,
  PlayerIcon,
  PostAddIcon,
  SearchIcon,
} from "@/components/icons/icon";
import styles from "./appbar.module.scss";
import { Page } from "@/types";

type props = {
  page: Page;
  onChangePage: (page: Page) => void;
  opened: boolean;
  open: () => void;
  close: () => void;
};

export default function Appbar({ page, onChangePage }: props) {
  return (
    <header className={styles.appbar}>
      <div className={styles.stack}>
        <PlayerIcon
          className={`${styles.icon_player} ${
            page === "view" && styles.selected
          }`}
          onClick={() => onChangePage("view")}
        />
        <PostAddIcon
          className={`${styles.icon_postadd} ${
            page === "post" && styles.selected
          }`}
          onClick={() => onChangePage("post")}
        />
        <AccountCircleIcon
          className={`${styles.icon_account} ${
            page === "user" && styles.selected
          }`}
          onClick={() => onChangePage("user")}
        />
        <SearchIcon
          className={`${styles.icon_search} ${
            page === "search" && styles.selected
          }`}
          onClick={() => onChangePage("search")}
        />
      </div>
    </header>
  );
}
