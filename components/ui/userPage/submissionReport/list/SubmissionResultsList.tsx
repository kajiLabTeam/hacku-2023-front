import { useState } from "react";
import { useRecoilValue } from "recoil";
import { Image, Loader, Text } from "@mantine/core";

import { userInformationState } from "@/store/state";
import styles from "./submissionResultsCardList.module.scss";

export default function SubmissionResultsList() {
  const [loading, setLoading] = useState(false);
  const userInformation = useRecoilValue(userInformationState);

  const handleImageError = () => {
    setLoading(false);
  };

  return (
    <div className={styles.grid}>
      {userInformation.achievements.map((achievement) => {
        return (
          <>
            {!loading ? (
              <Image
                key={achievement.name}
                mx="auto"
                radius="md"
                height={90}
                width={90}
                src={achievement.link}
                alt={achievement.name}
                onLoad={handleImageError}
                withPlaceholder
                placeholder={<Text color="black">{achievement.name}</Text>}
              />
            ) : (
              <Loader />
            )}
          </>
        );
      })}
    </div>
  );
}
