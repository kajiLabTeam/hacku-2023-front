import { Noto_Sans_JP } from "next/font/google";
import styles from "@/styles/Home.module.scss";
import Appbar from "@/components/base/appbar/appbar";
import { useState } from "react";
import { Page } from "@/types";
import PostPage from "@/components/page/post";
import ViewPage from "@/components/page/view";
import UserPage from "@/components/page/user";
import { useDisclosure, useHotkeys } from "@mantine/hooks";

const noto = Noto_Sans_JP({
  subsets: ["latin"],
  weight: ["100", "300", "500", "700", "900"],
});

export default function Home() {
  const [opened, { open, close }] = useDisclosure(false);
  const [page, setPage] = useState<Page>("view");

  useHotkeys([
    ["1", () => setPage("view")],
    ["2", () => setPage("post")],
    ["3", () => setPage("user")],
    ["4", () => open()],
    ["f", () => open()],
  ]);

  const Page = {
    view: <ViewPage />,
    post: <PostPage />,
    user: <UserPage />,
  };

  return (
    <main className={`${noto.className} ${styles.main}`}>
      <Appbar
        page={page}
        onChangePage={setPage}
        opened={opened}
        open={open}
        close={close}
      />
      {Page[page]}
    </main>
  );
}
