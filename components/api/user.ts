import {
  BrowsingHistories,
  HistoryObject,
  PostHistories,
  UserInformationObject,
  UserObject,
} from "@/types";
import { commonGetFetch, commonPostFetch } from "./common";

// ユーザーを追加
const fetcAddhUser = async (): Promise<UserObject> => {
  return commonPostFetch<UserObject>("/api/user/post/");
};

// ユーザー情報を取得
const fetchUserInformation = async (): Promise<UserInformationObject> => {
  return commonGetFetch<UserInformationObject>("/api/user/profile");
};

// 投稿履歴を取得
const fetchPostHistories = async (
  page: number = 1
): Promise<HistoryObject[]> => {
  const res = await commonGetFetch<{ postingHistories: HistoryObject[] }>(
    `/api/user/post/history/get/?page=${page}`
  );

  return res.postingHistories;
};

// 閲覧履歴を取得
const fetchBrowsingHistories = async (
  page: number = 1
): Promise<HistoryObject[]> => {
  const res = await commonGetFetch<BrowsingHistories>(
    `/api/user/browsing/history/?page=${page}`
  );
  return res.browsingHistories;
};

export {
  fetcAddhUser,
  fetchUserInformation,
  fetchPostHistories,
  fetchBrowsingHistories,
};
