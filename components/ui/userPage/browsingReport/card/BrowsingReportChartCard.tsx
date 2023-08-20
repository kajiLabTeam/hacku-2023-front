import { Center } from "@mantine/core";

import { PinIcon } from "@/components/icons/icon";
import styles from "./browsingReportChartCard.module.scss";
import BrowsingReportChart from "../chart/BrowsingReportChart";

type props = {
  className?: string;
};

export default function BrowsingReportChartCard({ className }: props) {
  return (
    <>
      <div className={styles.responsive_container}>
        <h1 className={styles.title_out_card}>閲覧レポート</h1>
        <div className={`${styles.responsive_settings_card} ${className}`}>
          <Center>
            <BrowsingReportChart />
          </Center>
        </div>
      </div>

      <div className={`${styles.settings_card} ${className}`}>
        <PinIcon className={styles.pin_icon} />
        <h1 className={styles.title_in_card}>閲覧レポート</h1>
        <Center>
          <BrowsingReportChart />
        </Center>
      </div>
    </>
  );
}
