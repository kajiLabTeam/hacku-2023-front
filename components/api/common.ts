import axios from "axios";

// 共通処理
export const commonGetFetch = async <T>(
  path: string,
  tokenId: string
): Promise<T> => {
  return axios
    .get(path, { headers: { Authorization: `Bearer ${tokenId}` } })
    .then((res) => {
      return res.data as T;
    })
    .catch((err) => {
      console.log(err);
      throw err;
    });
};

// 共通処理
export const commonGetFetchWithBody = async <T>(
  path: string,
  tokenId: string
): Promise<T> => {
  return axios
    .get(path, { headers: { Authorization: `Bearer ${tokenId}` } })
    .then((res) => {
      return res.data as T;
    })
    .catch((err) => {
      console.log(err);
      throw err;
    });
};

// 共通処理
export const commonPostFetch = async <T>(
  path: string,
  tokenId: string
): Promise<T> => {
  return axios
    .post(path, { headers: { Authorization: `Bearer ${tokenId}` } })
    .then((res) => {
      return res.data as T;
    })
    .catch((err) => {
      console.log(err);
      throw err;
    });
};

// 共通処理
export const commonPostFetchWithBody = async <T>(
  path: string,
  body: any,
  tokenId: string
): Promise<T> => {
  return axios
    .post(path, body, { headers: { Authorization: `Bearer ${tokenId}` } })
    .then((res) => {
      return res.data as T;
    })
    .catch((err) => {
      console.log(err);
      throw err;
    });
};
