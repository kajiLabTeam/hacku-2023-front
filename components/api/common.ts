import { ErrorObject } from "@/types";
import axios from "axios";

// 共通処理
export const commonPostFetch = async <T>(
  path: string,
  tokenId: string
): Promise<T | ErrorObject> => {
  return axios
    .post(path, { headers: { Authorization: `Bearer ${tokenId}` } })
    .then((res) => {
      return res.data as T;
    })
    .catch((err) => {
      return { error: err } as ErrorObject;
    });
};

// 共通処理
export const commonPostFetchWithBody = async <T>(
  path: string,
  body: any,
  tokenId: string
): Promise<T | ErrorObject> => {
  return axios
    .post(path, body, { headers: { Authorization: `Bearer ${tokenId}` } })
    .then((res) => {
      return res.data as T;
    })
    .catch((err) => {
      return { error: err } as ErrorObject;
    });
};
