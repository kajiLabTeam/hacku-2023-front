import styles from "@/styles/post.module.scss";
import ShortSettingsCard from "../ui/shortSettingsCard/shortSettingsCard";

export default function PostPage() {
  return (
    <section className={styles.post}>
      <section className={styles.page}>
        <div className={styles.left_top}>
          <ShortSettingsCard className={styles.settings_card} />
        </div>
      </section>

      <section className={styles.page}></section>

      <section className={styles.page}></section>

      <section className={styles.page}></section>
    </section>
  );
}
