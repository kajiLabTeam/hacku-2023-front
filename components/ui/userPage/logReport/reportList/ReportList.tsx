import { Box, SimpleGrid, Text, Title } from "@mantine/core";

import { useRecoilValue } from "recoil";
import { postHistoryState } from "@/store/state";
import LogSlideComponent from "../slide/logSlide";

export default function ReportList() {
  const postHistory = useRecoilValue(postHistoryState);

  const formatNumber = (number: number) => {
    if (number >= 10000) {
      return `${Math.floor(number / 10000)}万`;
    } else if (number >= 1000) {
      return `${Math.floor(number / 1000)}千`;
    } else {
      return number.toString();
    }
  };

  return (
    <Box ml={80}>
      <Title mt={40} order={1} align="center" weight="bold">
        自分の投稿
      </Title>
      <SimpleGrid cols={2} mt="xl" verticalSpacing={40}>
        {postHistory.postHistories.map((postHistory) => {
          return (
            <Box key={postHistory.id}>
              <LogSlideComponent
                markdown={postHistory.slide}
                views={formatNumber(postHistory.views)}
              />
              <Text mt={10} fw={800} align="center">
                {postHistory.title}
              </Text>
            </Box>
          );
        })}
      </SimpleGrid>
    </Box>
  );
}
