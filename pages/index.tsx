import { Noto_Sans_JP } from "next/font/google";
import styles from "@/styles/Home.module.scss";

const noto = Noto_Sans_JP({
  subsets: ["latin"],
  weight: ["100", "300", "500", "700", "900"],
});

export default function Home() {
  return <main className={`${noto.className} ${styles.main}`}></main>;
}
