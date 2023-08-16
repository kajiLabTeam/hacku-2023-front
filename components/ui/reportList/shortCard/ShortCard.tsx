import { Card, Image, Text, Box } from "@mantine/core";

export default function ShortCard() {
  return (
    <Box>
      <Card shadow="sm" radius="md" withBorder>
        <Card.Section>
          <Image
            src="https://images.unsplash.com/photo-1527004013197-933c4bb611b3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=720&q=80"
            height={300}
            width={600}
            alt="Norway"
          />
        </Card.Section>
      </Card>
      <Text align="center" size="xl" weight="bold">Book classic tour now</Text>
    </Box>
  );
}
