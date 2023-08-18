import { useRecoilValue } from "recoil";
import { Center, Image, SimpleGrid, Text } from "@mantine/core";

import { userInformationState } from "@/store/state";

export default function SubmissionResultsList() {
  const userInformation = useRecoilValue(userInformationState);

  return (
    <SimpleGrid cols={6} spacing={16} verticalSpacing={16}>
      {userInformation.achievements.map((achievement) => {
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
                <Image
                  mx="auto"
                  radius="md"
                  p={4}
                  src={achievement.link}
                  alt={achievement.name}
                />
              </Center>
            )}
          </>
        );
      })}
    </SimpleGrid>
  );
}
