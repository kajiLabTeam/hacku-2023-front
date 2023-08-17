import Head from "next/head";

const TITLE = "アプリ名";
const DESCRIPTION = "技術的なTIPSを共有するサービスです";
const SITE_URL = "https://https://hacku-2023-nagoya.vercel.app/";
const IMG_URL = "https://wisdom-tree.vercel.app/images/ogp.png";

export default function HeadMeta() {
  return (
    <Head>
      <title>{TITLE}</title>

      <meta property="og:title" content={TITLE} />
      <meta property="og:description" content={DESCRIPTION} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={SITE_URL} />
      <meta property="og:image" content={IMG_URL} />
      <meta property="og:site_name" content={TITLE} />
      <meta name="twitter:image" content="summary" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
  );
}
