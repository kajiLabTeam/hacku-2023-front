import axios from "axios";
import { getAuth } from "firebase/auth";

// 共通処理
export const commonGetFetch = async <T>(path: string): Promise<T> => {
  const auth = getAuth();
  const token = await auth.currentUser?.getIdToken(true);

  return axios
    .get(path, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    .then((res) => {
      return res.data as T;
    })
    .catch((err) => {
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
      throw err;
    });
};

// 共通処理
export const commonPostFetch = async <T>(path: string): Promise<T> => {
  const auth = getAuth();
  const token = await auth.currentUser?.getIdToken(true);

  const header = { headers: { Authorization: `Bearer ${token}` } };
  return axios
    .post(path, {}, header)
    .then((res) => {
      return res.data as T;
    })
    .catch((err) => {
      throw err;
    });
};

// 共通処理
export const commonPostFetchWithBody = async <T>(
  path: string,
  body: any
): Promise<T> => {
  const auth = getAuth();
  const token = await auth.currentUser?.getIdToken(true);

  return axios
    .post(path, body, { headers: { Authorization: `Bearer ${token}` } })
    .then((res) => {
      return res.data as T;
    })
    .catch((err) => {
      throw err;
    });
};

// 共通処理
export const commonDeleteFetch = async <T>(
  path: string,
  params: any
): Promise<T> => {
  const auth = getAuth();
  const token = await auth.currentUser?.getIdToken(true);

  const data = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
    data: params,
  };
  return axios
    .delete(path, data)
    .then((res) => {
      return res.data as T;
    })
    .catch((err) => {
      throw err;
    });
};
