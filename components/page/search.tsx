import styles from "@/styles/search.module.scss";
import ModalComponent from "@/components/ui/modal/modal";

export default function SearchPage() {
  return (
    <div className={styles.search}>
      <ModalComponent />
    </div>
  );
}
