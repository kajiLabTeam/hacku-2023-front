import { usePlayingSound } from "@/hooks/usePlayingSound";
import styles from "@/styles/user.module.scss";
import { useEffect } from "react";
import ReportList from "../ui/userPage/logReport/reportList/ReportList";
import SubmissionResultsCard from "../ui/userPage/submissionReport/card/SubmissionResultsCard";
import BrowsingReportChartCard from "../ui/userPage/browsingReport/card/BrowsingReportChartCard";
import { fetchPostHistories } from "../api/user";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { postHistoryState, userState } from "@/store/state";

export default function UserPage() {
  const [_, { switchShort }] = usePlayingSound();
  const tokenId = useRecoilValue(userState);
  const setPostHistories = useSetRecoilState(postHistoryState);

  useEffect(() => {
    switchShort(-1);
  }, [switchShort]);

  useEffect(() => {
    (async () => {
      if (tokenId) {
        console.log(tokenId);
        const res = await fetchPostHistories(tokenId);
        setPostHistories({ postHistories: res });
      }
    })();
  }, [setPostHistories, tokenId]);

  return (
    <section className={styles.user}>
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
