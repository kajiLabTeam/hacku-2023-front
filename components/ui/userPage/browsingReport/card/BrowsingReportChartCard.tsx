import { Box, Title } from "@mantine/core";

import { PinIcon } from "@/components/icons/icon";
import BrowsingReportChart from "../chart/BrowsingReportChart";
import styles from "./browsingReportChartCard.module.scss";

type props = {
  className?: string;
};

export default function BrowsingReportChartCard({ className }: props) {
  return (
    <div className={`${styles.settings_card} ${className}`}>
      <PinIcon className={styles.pin_icon} />
      <Title mb={16} align="center" weight="bold">
        閲覧レポート
      </Title>
      <Box>
        <BrowsingReportChart />
      </Box>
    </div>
  );
}
