import { Noto_Sans_JP } from "next/font/google";
import styles from "@/styles/Home.module.scss";
import Appbar from "@/components/base/appbar/appbar";
import { useEffect, useState } from "react";
import { Page } from "@/types";
import PostPage from "@/components/page/post";
import ViewPage from "@/components/page/view";
import UserPage from "@/components/page/user";
import { useDisclosure, useHotkeys } from "@mantine/hooks";
import SearchPage from "@/components/page/search";
import { Modal } from "@mantine/core";
import { login, useIsSigned } from "@/components/firebase/auth";
import SigninComponent from "@/components/ui/signin/signin";

const noto = Noto_Sans_JP({
  subsets: ["latin"],
  weight: ["100", "300", "500", "700", "900"],
});

export default function Home() {
  const [opened, { open, close }] = useDisclosure(false);
  const [page, setPage] = useState<Page>("view");
  const isSigned = useIsSigned();

  function signinWithEnter() {
    if (opened) login();
  }

  useHotkeys([
    ["1", () => setPage("view")],
    ["2", () => setPage("post")],
    ["3", () => setPage("user")],
    ["4", () => setPage("search")],
    ["f", () => setPage("search")],
    ["enter", signinWithEnter],
    ["esc", close],
  ]);

  const Page: { [key in Page]: JSX.Element } = {
    view: <ViewPage />,
    post: <PostPage />,
    user: <UserPage />,
    search: <SearchPage />,
  };

  useEffect(() => {
    if (page !== "view") {
      if (isSigned === false) open();
    }
  }, [isSigned, open, page]);

  return (
    <main className={`${noto.className} ${styles.main}`}>
      <Modal
        opened={opened}
        onClose={() => {
          close();
          setPage("view");
        }}
        withCloseButton={false}
      >
        <SigninComponent />
      </Modal>

      <Appbar page={page} onChangePage={setPage} />
      {Page[page]}
    </main>
  );
}
