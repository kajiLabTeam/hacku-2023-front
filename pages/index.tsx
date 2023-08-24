import { Noto_Sans_JP } from "next/font/google";
import styles from "@/styles/Home.module.scss";
import Appbar from "@/components/base/appbar/appbar";
import { useEffect, useState } from "react";
import { Page } from "@/types";
import PostPage from "@/components/page/post";
import ViewPage from "@/components/page/view";
import UserPage from "@/components/page/user";
import {
  useDisclosure,
  useHotkeys,
  useLocalStorage,
  useMediaQuery,
} from "@mantine/hooks";
import SearchPage from "@/components/page/search";
import { MediaQuery, Modal } from "@mantine/core";
import { login, logout, useIsSigned } from "@/components/firebase/auth";
import SigninComponent from "@/components/ui/signin/signin";
import LoadingComponent from "@/components/ui/loading/loading";

const noto = Noto_Sans_JP({
  subsets: ["latin"],
  weight: ["100", "300", "500", "700", "900"],
});

export default function Home() {
  const [opened, { open, close }] = useDisclosure(false);
  const [page, setPage] = useLocalStorage<Page>({
    key: "page",
    defaultValue: "view",
  });
  const isSigned = useIsSigned();
  const matches = useMediaQuery("(max-width: 850px)");

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
    search: <SearchPage setPage={setPage} />,
  };

  useEffect(() => {
    if (page !== "view") {
      if (isSigned === false) open();
    }
  }, [isSigned, open, page]);

  return (
    <main className={`${noto.className} ${styles.main}`}>
      {matches ? (
        Page["view"]
      ) : (
        <>
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

          {isSigned === undefined && <LoadingComponent />}

          <Appbar page={page} onChangePage={setPage} />
          {Page[page]}
        </>
      )}
    </main>
  );
}
