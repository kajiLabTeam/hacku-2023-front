import styles from "@/styles/search.module.scss";
import ModalComponent from "@/components/ui/modal/modal";
import { usePlayingSound } from "@/hooks/usePlayingSound";
import { useEffect } from "react";

export default function SearchPage() {
  const [_, { switchShort }] = usePlayingSound();

  useEffect(() => {
    switchShort(-1);
  }, [switchShort]);

  return (
    <div className={styles.search}>
      <ModalComponent />
    </div>
  );
}
