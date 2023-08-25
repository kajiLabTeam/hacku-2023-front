import { useState } from "react";
import { useRecoilValue } from "recoil";
import { userInformationState } from "@/store/state";
import styles from "./submissionResultsCardList.module.scss";

export default function SubmissionResultsList() {
  const userInformation = useRecoilValue(userInformationState);

  const [achievements, setAchievements] = useState(
    userInformation.achievements.filter((achievement) => {
      return achievement.link !== "";
    })
  );

  const [noneAchievements, setNoneAchievements] = useState(
    userInformation.achievements.filter((achievement) => {
      return achievement.link === "";
    })
  );

  return (
    <div className={styles.grid}>
      {achievements.map((achievement) => (
        <div key={achievement.name} className={styles.have}>
          {achievement.name}
        </div>
      ))}

      {noneAchievements.map((achievement) => (
        <div key={achievement.name} className={styles.none}>
          {achievement.name}
        </div>
      ))}
    </div>
  );
}
