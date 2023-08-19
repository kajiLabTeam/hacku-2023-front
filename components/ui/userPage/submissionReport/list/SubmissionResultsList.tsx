import { useRecoilValue } from "recoil";
import { Center, Image, Loader, SimpleGrid, Text } from "@mantine/core";

import { userInformationState } from "@/store/state";
import { useUserPage } from "@/hooks/useUserPage";
import { useEffect, useState } from "react";

export default function SubmissionResultsList() {
  const { loading, isExistsImg } = useUserPage();
  const userInformation = useRecoilValue(userInformationState);

  const [isExistsImgArr, setIsExistsImgArr] = useState<boolean[]>([]);

  useEffect(() => {
    const newIsExistsImgArr: boolean[] = [];
    userInformation.achievements.map((achievement) => {
      async () => {
        const isExist = await isExistsImg(achievement.link);
        newIsExistsImgArr.push(isExist);
      };
    });
    setIsExistsImgArr(newIsExistsImgArr);
  }, [userInformation, isExistsImg]);

  return (
    <SimpleGrid cols={6} spacing={16} verticalSpacing={16}>
      {userInformation.achievements.map((achievement, index) => {
        return (
          <>
            {achievement.link == "" ? (
              <Center
                key={achievement.name}
                bg="gray.2"
                h={100}
                w={100}
                variant="outline"
              >
                <Text>{achievement.name}</Text>
              </Center>
            ) : (
              <Center key={achievement.name} h={100} w={100} variant="outline">
                {loading ? (
                  <Loader />
                ) : isExistsImgArr[index] ? (
                  <Image
                    mx="auto"
                    radius="md"
                    p={4}
                    src={achievement.link}
                    alt={achievement.name}
                  />
                ) : (
                  <Center
                    key={achievement.name}
                    bg="gray.2"
                    h={100}
                    w={100}
                    variant="outline"
                  >
                    <Text>{achievement.name}</Text>
                  </Center>
                )}
              </Center>
            )}
          </>
        );
      })}
    </SimpleGrid>
  );
}
