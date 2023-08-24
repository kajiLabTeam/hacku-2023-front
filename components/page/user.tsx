import { usePlayingSound } from "@/hooks/usePlayingSound";
import styles from "@/styles/user.module.scss";
import { useEffect } from "react";
import ReportList from "../ui/userPage/logReport/reportList/ReportList";
import SubmissionResultsCard from "../ui/userPage/submissionReport/card/SubmissionResultsCard";
import BrowsingReportChartCard from "../ui/userPage/browsingReport/card/BrowsingReportChartCard";
import { useRecoilValue, useSetRecoilState } from "recoil";
import {
  browsingHistoryState,
  postHistoryState,
  userInformationState,
  userState,
} from "@/store/state";
import { postHistories } from "@/sample/postHistory";
import { browsingHistories } from "@/sample/browsingHistory";
import { userInformation } from "@/sample/userInformation";

export default function UserPage() {
  const [_, { switchShort }] = usePlayingSound();
  const tokenId = useRecoilValue(userState);
  const setPostHistories = useSetRecoilState(postHistoryState);
  const setBrowsingHistories = useSetRecoilState(browsingHistoryState);
  const setUserInformation = useSetRecoilState(userInformationState);

  useEffect(() => {
    switchShort(-1);
  }, [switchShort]);

  useEffect(() => {
    (async () => {
      if (tokenId) {
        setPostHistories({ postHistories: postHistories });

        setBrowsingHistories({ browsingHistories: browsingHistories });

        setUserInformation(userInformation);
      }
    })();
  }, [setBrowsingHistories, setPostHistories, setUserInformation, tokenId]);

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
