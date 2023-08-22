import axios from "axios";

// GETリクエスト
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

// POSTリクエスト
export const commonPostFetch = async <T>(
  path: string,
  body: any,
  tokenId: string
): Promise<T> => {
  const headers = {
    Authorization: `Bearer ${tokenId}`,
  };
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

// DELETEリクエスト
export const commonDeleteFetchWithBody = async <T>(
  path: string,
  body: any,
  tokenId: string
): Promise<T> => {
  return axios
    .delete(path, { headers: { Authorization: `Bearer ${tokenId}` } })
    .then((res) => {
      return res.data as T;
    })
    .catch((err) => {
      console.log(err);
      throw err;
    });
};
