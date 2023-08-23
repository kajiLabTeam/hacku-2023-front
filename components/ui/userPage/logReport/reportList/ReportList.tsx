import { useRecoilValue } from "recoil";
import { Carousel } from "@mantine/carousel";
import { Box, SimpleGrid, Text } from "@mantine/core";
import styles from "./reportList.module.scss";
import { formatNumber } from "@/components/util/util";
import LogSlideComponent from "../slide/logSlide";
import { browsingHistoryState, postHistoryState } from "@/store/state";
import { useEffect } from "react";

export default function ReportList() {
  const postHistory = useRecoilValue(postHistoryState);
  const browsingHistories = useRecoilValue(browsingHistoryState);

  return (
    <Box>
      <Carousel
        slideGap="xl"
        sx={(theme) => ({
          "@media (min-width: 850px)": {
            marginBottom: 20,
          },
          "@media (max-width: 850px)": {
            marginBottom: 80,
          },
        })}
      >
        <Carousel.Slide className={styles.grid}>
          <h1 className={styles.title_in_card}>自分の閲覧履歴</h1>
          <SimpleGrid mb={40} cols={2} mt="xl" verticalSpacing={40}>
            {browsingHistories.browsingHistories.map((browsingHistory) => {
              return (
                <Box key={browsingHistory.id}>
                  <LogSlideComponent
                    markdown={browsingHistory.slide}
                    views={formatNumber(browsingHistory.views)}
                  />
                  <Text mt={10} fw={800} align="center">
                    {browsingHistory.title}
                  </Text>
                </Box>
              );
            })}
          </SimpleGrid>
        </Carousel.Slide>
        <Carousel.Slide className={styles.grid}>
          <h1 className={styles.title_in_card}>過去の投稿</h1>
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
        </Carousel.Slide>
      </Carousel>
    </Box>
  );
}
