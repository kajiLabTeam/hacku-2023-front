import { useEffect, useState } from "react";
import { useRecoilValue } from "recoil";
import { userInformationState } from "@/store/state";
import styles from "./submissionResultsCardList.module.scss";
import { Achievement } from "@/types";

export default function SubmissionResultsList() {
  const userInformation = useRecoilValue(userInformationState);

  const [achievements, setAchievements] = useState<Achievement[]>([]);

  const [noneAchievements, setNoneAchievements] = useState<Achievement[]>([]);

  useEffect(() => {
    setAchievements(
      userInformation.achievements.filter((achievement) => {
        return achievement.link !== "";
      })
    );
    setNoneAchievements(
      userInformation.achievements.filter((achievement) => {
        return achievement.link === "";
      })
    );
  }, [userInformation.achievements]);

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
