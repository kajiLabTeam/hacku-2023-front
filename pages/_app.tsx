import "@/styles/globals.css";
import HeadMeta from "@/components/base/headmeta/headmeta";
import { AppProps } from "next/app";
import { MantineProvider } from "@mantine/core";
import { RecoilRoot } from "recoil";

export default function App(props: AppProps) {
  const { Component, pageProps } = props;

  return (
    <>
      <HeadMeta />

      <RecoilRoot>
        <MantineProvider withGlobalStyles withNormalizeCSS>
          <Component {...pageProps} />
        </MantineProvider>
      </RecoilRoot>
    </>
  );
}
