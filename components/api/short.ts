import { PostShortObject, ShortList } from "@/types";
import {
  commonGetFetch,
  commonGetFetchWithoutToken,
  commonPostFetchWithBody,
} from "./common";

// ショート一覧を取得
const fetchShorts = async (tokenId: string | null): Promise<ShortList> => {
  if (tokenId) {
    const res = await commonGetFetch<{ shorts: ShortList }>(
      "/api/short/get",
      tokenId
    );
    return res.shorts;
  } else {
    const res = await commonGetFetchWithoutToken<{ shorts: ShortList }>(
      "/api/short/get"
    );
    return res.shorts;
  }
};

// タグかタイトルからショート一覧を取得
const fetchShortsByTagsOrTitle = async (
  title: string,
  tags: string,
  tokenId: string
): Promise<ShortList> => {
  const res = await commonGetFetch<{ shorts: ShortList }>(
    `/api/short/search/?title=${title}&tags=${tags}`,
    tokenId
  );
  return res.shorts;
};

// ショートを投稿
const fetchPostShort = async (
  short: PostShortObject,
  tokenId: string
): Promise<PostShortObject> => {
  return commonPostFetchWithBody<PostShortObject>(
    "/api/short/post",
    short,
    tokenId
  );
};

export { fetchShorts, fetchShortsByTagsOrTitle, fetchPostShort };
