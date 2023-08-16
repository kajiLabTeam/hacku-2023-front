import { Box, SimpleGrid, Title } from "@mantine/core";
import ShortCard from "./shortCard/ShortCard";

export default function ReportList() {
  return (
    <Box ml={80}>
      <Title mt={60} order={1} align="center" weight="bold">
        自分の投稿
      </Title>
      <SimpleGrid cols={2} mt="xl" verticalSpacing={40}>
        <ShortCard />
        <ShortCard />
        <ShortCard />
        <ShortCard />
        <ShortCard />
        <ShortCard />
        <ShortCard />
        <ShortCard />
        <ShortCard />
        <ShortCard />
        <ShortCard />
        <ShortCard />
      </SimpleGrid>
    </Box>
  );
}
