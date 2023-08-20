import { Box, Center } from "@mantine/core";

import { PinIcon } from "@/components/icons/icon";
import styles from "./submissionResultsCard.module.scss";
import SubmissionResultsList from "../list/SubmissionResultsList";

type props = {
  className?: string;
};

export default function SubmissionResultsCard({ className }: props) {
  return (
    <>
      <div className={styles.responsive_container}>
        <h1 className={styles.title_out_card}>投稿実績</h1>
        <div className={`${styles.responsive_settings_card} ${className}`}>
          <SubmissionResultsList />
        </div>
      </div>

      <div className={`${styles.settings_card} ${className}`}>
        <PinIcon className={styles.pin_icon} />
        <h1 className={styles.title_in_card}>投稿実績</h1>
        <SubmissionResultsList />
      </div>
    </>
  );
}
