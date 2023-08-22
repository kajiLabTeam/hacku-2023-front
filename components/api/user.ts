import {
  BrowsingHistories,
  ErrorObject,
  PostHistories,
  UserInformationObject,
  UserObject,
} from "@/types";
import { commonPostFetch } from "./common";

// ユーザーを追加
const fetchUser = async (
  tokenId: string
): Promise<UserObject | ErrorObject> => {
  return commonPostFetch<UserObject>("user/post", tokenId);
};

// ユーザー情報を取得
const fetchUserInformation = async (
  shortId: number,
  tokenId: string
): Promise<UserInformationObject | ErrorObject> => {
  return commonPostFetch<UserInformationObject>(`user/get/${shortId}`, tokenId);
};

// 投稿履歴を取得
const fetchPostHistories = async (
  tokenId: string
): Promise<PostHistories | ErrorObject> => {
  return commonPostFetch<PostHistories>("user/post/history", tokenId);
};

// 閲覧履歴を取得
const fetchBrowsingHistories = async (
  tokenId: string,
  page: number
): Promise<BrowsingHistories | ErrorObject> => {
  return commonPostFetch<BrowsingHistories>(
    `user/browsing/history/?page=${page}`,
    tokenId
  );
};

export {
  fetchUser,
  fetchUserInformation,
  fetchPostHistories,
  fetchBrowsingHistories,
};
