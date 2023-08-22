import styles from "./loading.module.scss";

export default function LoadingComponent() {
  return (
    <div className={styles.loading}>
      <div className={styles.display} style={{ ["--t" as string]: "0s" }}></div>
      <div className={styles.display} style={{ ["--t" as string]: "1s" }}></div>
    </div>
  );
}
