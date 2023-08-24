import axios from "axios";

// 共通処理
export const commonGetFetch = async <T>(
  path: string,
  tokenId: string
): Promise<T> => {
  return axios
    .get(path, {
      headers: {
        Authorization: `Bearer ${tokenId}`,
      },
    })
    .then((res) => {
      return res.data as T;
    })
    .catch((err) => {
      console.log(err);
      throw err;
    });
};

// 共通処理
export const commonGetFetchWithoutToken = async <T>(
  path: string
): Promise<T> => {
  return axios
    .get(path)
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
  const header = { headers: { Authorization: `Bearer ${tokenId}` } };
  return axios
    .post(path, {}, header)
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

// 共通処理
export const commonDeleteFetch = async <T>(
  path: string,
  params: any,
  tokenId: string
): Promise<T> => {
  const data = {
    headers: {
      Authorization: `Bearer ${tokenId}`,
    },
    data: params,
  };
  return axios
    .delete(path, data)
    .then((res) => {
      return res.data as T;
    })
    .catch((err) => {
      console.log(err);
      throw err;
    });
};
