import {
  AccountCircleIcon,
  PlayerIcon,
  PostAddIcon,
  SearchIcon,
} from "@/components/icons/icon";
import styles from "./appbar.module.scss";
import { useDisclosure } from "@mantine/hooks";
import { Modal } from "@mantine/core";
import ModalComponent from "@/components/ui/modal/modal";
import { Page } from "@/types";

type props = {
  page: Page;
  onChangePage: (page: Page) => void;
  opened: boolean;
  open: () => void;
  close: () => void;
};

export default function Appbar({
  page,
  onChangePage,
  opened,
  open,
  close,
}: props) {
  return (
    <>
      <header className={styles.appbar}>
        <div className={styles.stack}>
          <PlayerIcon
            className={`${styles.icon_player} ${
              page === "view" && !opened && styles.selected
            }`}
            onClick={() => onChangePage("view")}
          />
          <PostAddIcon
            className={`${styles.icon_postadd} ${
              page === "post" && !opened && styles.selected
            }`}
            onClick={() => onChangePage("post")}
          />
          <AccountCircleIcon
            className={`${styles.icon_account} ${
              page === "user" && !opened && styles.selected
            }`}
            onClick={() => onChangePage("user")}
          />
          <SearchIcon
            className={`${styles.icon_search} ${opened && styles.selected}`}
            onClick={open}
          />
        </div>
      </header>

      <Modal
        size={"min(100%, 400px)"}
        overlayProps={{
          color: "#ffffff",
          opacity: 0.2,
        }}
        opened={opened}
        onClose={close}
        centered
        withCloseButton={false}
      >
        <ModalComponent />
      </Modal>
    </>
  );
}
