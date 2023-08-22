import { PostShortObject, ShortList, ShortObject } from "@/types";
import { commonPostFetch } from "./common";

// ショート一覧を取得
const fetchShorts = async (tokenId: string): Promise<ShortList> => {
  return commonPostFetch<ShortList>("short/get", tokenId);
};

// id からショートを取得
const fetchShortById = async (
  tokenId: string,
  shortId: number
): Promise<ShortObject> => {
  return commonPostFetch<ShortObject>(`short/get/${shortId}`, tokenId);
};

// タグかタイトルからショート一覧を取得
const fetchShortsByTagsOrTitle = async (
  tokenId: string,
  tags: string,
  title: string
): Promise<ShortList> => {
  return commonPostFetch<ShortList>(
    `short/search?tags=${tags}&title=${title}`,
    tokenId
  );
};

// ショートを投稿
const postShort = async (
  tokenId: string,
  short: PostShortObject
): Promise<PostShortObject> => {
  return commonPostFetch<PostShortObject>("short/post", tokenId);
};

export { fetchShorts, fetchShortById, fetchShortsByTagsOrTitle, postShort };
