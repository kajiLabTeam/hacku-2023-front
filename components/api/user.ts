import {
  BrowsingHistories,
  PostHistories,
  UserInformationObject,
  UserObject,
} from "@/types";
import { commonGetFetch, commonPostFetch } from "./common";

// ユーザーを追加
const fetchUser = async (tokenId: string): Promise<UserObject> => {
  return commonPostFetch<UserObject>("/api/user/post", {}, tokenId);
};

// ユーザー情報を取得
const fetchUserInformation = async (
  shortId: number,
  tokenId: string
): Promise<UserInformationObject> => {
  return commonGetFetch<UserInformationObject>(
    `/api/user/get/${shortId}`,
    tokenId
  );
};

// 投稿履歴を取得
const fetchPostHistories = async (
  page: number,
  tokenId: string
): Promise<PostHistories> => {
  return commonGetFetch<PostHistories>(
    `/api/user/post/history/get/?page=${page}`,
    tokenId
  );
};

// 閲覧履歴を取得
const fetchBrowsingHistories = async (
  page: number,
  tokenId: string
): Promise<BrowsingHistories> => {
  return commonGetFetch<BrowsingHistories>(
    `/api/user/browsing/history/?page=${page}`,
    tokenId
  );
};

export {
  fetchUser,
  fetchUserInformation,
  fetchPostHistories,
  fetchBrowsingHistories,
};
