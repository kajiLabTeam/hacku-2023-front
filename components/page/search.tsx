import styles from "@/styles/search.module.scss";
import ModalComponent from "@/components/ui/modal/modal";
import { usePlayingSound } from "@/hooks/usePlayingSound";
import { useEffect } from "react";
import { Page } from "@/types";

export default function SearchPage({
  setPage,
}: {
  setPage: (page: Page) => void;
}) {
  const [_, { switchShort }] = usePlayingSound();

  useEffect(() => {
    switchShort(-1);
  }, [switchShort]);

  return (
    <div className={styles.search}>
      <ModalComponent setPage={setPage} />
    </div>
  );
}
