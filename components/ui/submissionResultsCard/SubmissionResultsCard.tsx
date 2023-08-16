import { useState } from "react";
import styles from "./submissionResultsCard.module.scss";
import { PinIcon } from "@/components/icons/icon";
import usePostShort from "@/hooks/usePostShort";

import SubmissionResultsList from "../submissionResultsList/SubmissionResultsList";

type props = {
  className?: string;
};

export default function SubmissionResultsCard({ className }: props) {
  const [searchTag, setSearchTag] = useState("");
  const [short, { addTag, deleteTag, setTitle, setSpeaker, setGenre }] =
    usePostShort();

  return (
    <div className={`${styles.settings_card} ${className}`}>
      <PinIcon className={styles.pin_icon} />
      <SubmissionResultsList />
    </div>
  );
}
