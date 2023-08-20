import { useRecoilValue } from "recoil";
import { Center, Image, Loader, SimpleGrid, Text } from "@mantine/core";

import { userInformationState } from "@/store/state";
import { useUserPage } from "@/hooks/useUserPage";
import { useEffect, useState } from "react";

export default function SubmissionResultsList() {
  const { isExistsImg } = useUserPage();
  const [loading, setLoading] = useState(false);
  const userInformation = useRecoilValue(userInformationState);
  const [imageError, setImageError] = useState(false);

  const handleImageError = () => {
    setLoading(false);
  };

  const [isExistsImgArr, setIsExistsImgArr] = useState<boolean[]>([]);

  return (
    <SimpleGrid cols={6} spacing={16} verticalSpacing={16}>
      {userInformation.achievements.map((achievement, index) => {
        return (
          <>
            <Center key={achievement.name} h={100} w={100} variant="outline">
              {!loading ? (
                <Image
                  mx="auto"
                  radius="md"
                  src={achievement.link}
                  alt={achievement.name}
                  onLoad={handleImageError}
                  withPlaceholder
                  placeholder={
                    <Center
                      key={achievement.name}
                      bg="gray.2"
                      h={100}
                      w={100}
                      variant="outline"
                    >
                      <Text color="black">{achievement.name}</Text>
                    </Center>
                  }
                />
              ) : (
                <Loader />
              )}
            </Center>
          </>
        );
      })}
    </SimpleGrid>
  );
}
