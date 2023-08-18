import { Box, SimpleGrid, Text, Title } from "@mantine/core";
import SlideComponent from "../slide/slide";
import { useRecoilValue } from "recoil";
import { postHistoryState } from "@/store/state";

export default function ReportList() {
  const postHistory = useRecoilValue(postHistoryState);

  return (
    <Box ml={80}>
      <Title mt={40} order={1} align="center" weight="bold">
        自分の投稿
      </Title>
      <SimpleGrid cols={2} mt="xl" verticalSpacing={40}>
        {postHistory.postHistories.map((pH) => {
          return (
            <Box key={pH.id}>
              <SlideComponent markdown={pH.slide} />
              <Text mt={10} fw={800} align="center">
                {pH.title}
              </Text>
            </Box>
          );
        })}
      </SimpleGrid>
    </Box>
  );
}
