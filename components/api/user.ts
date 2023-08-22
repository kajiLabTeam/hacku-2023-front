import {
  BrowsingHistories,
  ErrorObject,
  PostHistories,
  UserInformationObject,
  UserObject,
} from "@/types";
import axios from "axios";

const postUser = async (tokenId: string): Promise<UserObject | ErrorObject> => {
  try {
    const res = await axios.post("/user/post", {
      headers: {
        Authorization: `Bearer ${tokenId}`,
      },
    });
    return await res.data;
  } catch (e) {
    return { error: e } as ErrorObject;
  }
};

const fetchUserInformation = async (
  tokenId: string,
  shortId: number
): Promise<UserInformationObject | ErrorObject> => {
  try {
    const res = await axios.get(`api/short/get/${shortId}`, {
      headers: {
        Authorization: `Bearer ${tokenId}`,
      },
    });
    return res.data;
  } catch (e) {
    return { error: e } as ErrorObject;
  }
};

const fetchPostHistories = async (
  tokenId: string
): Promise<PostHistories | ErrorObject> => {
  try {
    const res = await axios.get("user/post/history", {
      headers: {
        Authorization: `Bearer ${tokenId}`,
      },
    });
    return res.data;
  } catch (e) {
    return { error: e } as ErrorObject;
  }
};

const fetchBrowsingHistories = async (
  tokenId: string,
  page: number
): Promise<BrowsingHistories | ErrorObject> => {
  try {
    const res = await axios.get(
      `${process.env.NEXT_PUBLIC_API_URL}/user/browsing/history/?page=${page}`,
      {
        headers: {
          Authorization: `Bearer ${tokenId}`,
        },
      }
    );
    return res.data;
  } catch (e) {
    return { error: e } as ErrorObject;
  }
};

export {
  postUser,
  fetchUserInformation,
  fetchPostHistories,
  fetchBrowsingHistories,
};
