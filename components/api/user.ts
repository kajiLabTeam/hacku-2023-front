import {
  BrowsingHistories,
  HistoryObject,
  PostHistories,
  UserInformationObject,
  UserObject,
} from "@/types";
import { commonGetFetch, commonPostFetch } from "./common";

// ユーザーを追加
const fetcAddhUser = async (tokenId: string): Promise<UserObject> => {
  return commonPostFetch<UserObject>("/api/user/post/", tokenId);
};

// ユーザー情報を取得
const fetchUserInformation = async (
  shortId: number,
  tokenId: string
): Promise<UserInformationObject> => {
  return commonGetFetch<UserInformationObject>(`user/get/${shortId}`, tokenId);
};

// 投稿履歴を取得
const fetchPostHistories = async (
  tokenId: string,
  page: number = 1
): Promise<HistoryObject[]> => {
  const res = await commonGetFetch<{ postingHistories: HistoryObject[] }>(
    `/api/user/post/history/get/?page=${page}`,
    tokenId
  );

  return res.postingHistories;
};

// 閲覧履歴を取得
const fetchBrowsingHistories = async (
  tokenId: string,
  page: number
): Promise<BrowsingHistories> => {
  return commonGetFetch<BrowsingHistories>(
    `user/browsing/history/?page=${page}`,
    tokenId
  );
};

export {
  fetcAddhUser,
  fetchUserInformation,
  fetchPostHistories,
  fetchBrowsingHistories,
};
