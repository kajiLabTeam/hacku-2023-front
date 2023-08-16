import { useState } from "react";
import styles from "./browsingReportChartCard.module.scss";
import { PinIcon } from "@/components/icons/icon";
import usePostShort from "@/hooks/usePostShort";
import { Box, Select, Title } from "@mantine/core";
import { genres, genresKeys, genresValues, speakers } from "@/const";
import { GenreKey, GenreValue, Speaker } from "@/types";
import BrowsingReportChart from "../chart/BrowsingReportChart";

type props = {
  className?: string;
};

export default function BrowsingReportChartCard({ className }: props) {
  const [searchTag, setSearchTag] = useState("");
  const [short, { addTag, deleteTag, setTitle, setSpeaker, setGenre }] =
    usePostShort();

  return (
    <div className={`${styles.settings_card} ${className}`}>
      <PinIcon className={styles.pin_icon} />
      <Title align="center" weight="bold">
        閲覧レポート
      </Title>
      <Box mb={40}>
        <BrowsingReportChart />
      </Box>
    </div>
  );
}
