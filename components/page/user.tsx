import styles from "@/styles/user.module.scss";
import BrowsingReportChart from "../ui/chart/BrowsingReportChart";
import ShortSettingsCard from "../ui/shortSettingsCard/shortSettingsCard";
import ReportList from "../ui/reportList/ReportList";
import { Text, Title } from "@mantine/core";
import BrowsingReportChartCard from "../ui/browsingReportChart/BrowsingReportChartCard";
import SubmissionResultsCard from "../ui/submissionResultsCard/SubmissionResultsCard";

export default function UserPage() {
  return (
    <section className={styles.user}>
      <h1>User</h1>
      <div className={styles.left_container}>
        <ReportList />
      </div>

      <div className={styles.right_container}>
        <div className={styles.right_top}>
          <SubmissionResultsCard />
        </div>
        <div className={styles.right_bottom}>
          <BrowsingReportChartCard />
        </div>
      </div>
    </section>
  );
}
