import { usePlayingSound } from "@/hooks/usePlayingSound";
import styles from "@/styles/user.module.scss";
import { useEffect } from "react";

export default function UserPage() {
  const [_, { switchShort }] = usePlayingSound();

  useEffect(() => {
    switchShort(-1);
  }, [switchShort]);
  
  return (
    <section className={styles.user}>
      <h1>User</h1>
    </section>
  );
}
