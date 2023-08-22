import { PostShortObject, ShortList, ShortObject } from "@/types";
import {
  commonGetFetch,
  commonPostFetch,
  commonPostFetchWithBody,
} from "./common";

// ショート一覧を取得
const fetchShorts = async (tokenId: string): Promise<ShortList> => {
  const res = await commonGetFetch<{ shorts: ShortList }>(
    "/api/short/get",
    tokenId
  );
  return res.shorts;
};

// id からショートを取得
const fetchShortById = async (
  tokenId: string,
  shortId: number
): Promise<ShortObject> => {
  return commonGetFetch<ShortObject>(`short/get/${shortId}`, tokenId);
};

// タグかタイトルからショート一覧を取得
const fetchShortsByTagsOrTitle = async (
  tokenId: string,
  tags: string,
  title: string
): Promise<ShortList> => {
  return commonGetFetch<ShortList>(
    `short/search?tags=${tags}&title=${title}`,
    tokenId
  );
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

export {
  fetchShorts,
  fetchShortById,
  fetchShortsByTagsOrTitle,
  fetchPostShort,
};
