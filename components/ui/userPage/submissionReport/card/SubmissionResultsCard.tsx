import { useState } from "react";
import { Title } from "@mantine/core";

import { PinIcon } from "@/components/icons/icon";
import styles from "./submissionResultsCard.module.scss";

import SubmissionResultsList from "../list/SubmissionResultsList";

type props = {
  className?: string;
};

export default function SubmissionResultsCard({ className }: props) {
  return (
    <div className={`${styles.settings_card} ${className}`}>
      <PinIcon className={styles.pin_icon} />
      <Title mb={32} align="center" weight="bold">
        投稿実績
      </Title>
      <SubmissionResultsList />
    </div>
  );
}
