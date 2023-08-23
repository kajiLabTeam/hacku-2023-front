import { usePlayingSound } from "@/hooks/usePlayingSound";
import styles from "@/styles/user.module.scss";
import { use, useEffect } from "react";

import ReportList from "../ui/userPage/logReport/reportList/ReportList";
import SubmissionResultsCard from "../ui/userPage/submissionReport/card/SubmissionResultsCard";
import BrowsingReportChartCard from "../ui/userPage/browsingReport/card/BrowsingReportChartCard";
import { useRecoilValue, useSetRecoilState } from "recoil";
import {
  browsingHistoryState,
  postHistoryState,
  userState,
} from "@/store/state";
import {
  fetchBrowsingHistories,
  fetchPostHistories,
} from "@/components/api/user";
import { useIsSigned } from "../firebase/auth";

export default function UserPage() {
  const setPostHistory = useSetRecoilState(postHistoryState);
  const setBrowsingHistory = useSetRecoilState(browsingHistoryState);
  const tokenId = useRecoilValue(userState);
  const isSignedIn = useIsSigned();
  const [_, { switchShort }] = usePlayingSound();

  useEffect(() => {
    return () => switchShort(-1);
  }, [switchShort]);

  useEffect(() => {
    return () => {
      console.log(tokenId);

      if (!tokenId || !isSignedIn) return;
      (async () => {
        const postHistory = await fetchPostHistories(1, tokenId);
        const browsingHistory = await fetchBrowsingHistories(1, tokenId);
        setPostHistory(postHistory);
        setBrowsingHistory(browsingHistory);
      })();
    };
  }, [isSignedIn, setBrowsingHistory, setPostHistory, tokenId]);

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
