import axios from "axios";

import { ErrorObject, PostShortObject, ShortList, ShortObject } from "@/types";

const fetchShorts = async (
  tokenId: string
): Promise<ShortList | ErrorObject> => {
  try {
    const res = await axios.get(`/short/get`, {
      headers: {
        Authorization: `Bearer ${tokenId}`,
      },
    });
    return res.data;
  } catch (e) {
    return { error: e } as ErrorObject;
  }
};

const fetchShortById = async (
  tokenId: string,
  shortId: number
): Promise<ShortObject | ErrorObject> => {
  try {
    const res = await axios.get(`/get/${shortId}`, {
      headers: {
        Authorization: `Bearer ${tokenId}`,
      },
    });
    return res.data;
  } catch (e) {
    return { error: e } as ErrorObject;
  }
};

const fetchShortsByTagsOrTitle = async (
  tokenId: string,
  tags: string,
  title: string
): Promise<ShortList | ErrorObject> => {
  try {
    const res = await axios.get(`/short/search?tags=${tags}&title=${title}`, {
      headers: {
        Authorization: `Bearer ${tokenId}`,
      },
    });
    return res.data;
  } catch (e) {
    return { error: e } as ErrorObject;
  }
};

const postShort = async (
  tokenId: string,
  short: PostShortObject
): Promise<PostShortObject | ErrorObject> => {
  try {
    const res = await axios.post(`/short/post`, short, {
      headers: {
        Authorization: `Bearer ${tokenId}`,
      },
    });
    return res.data();
  } catch (e) {
    return { error: e } as ErrorObject;
  }
};

export { fetchShorts, fetchShortById, fetchShortsByTagsOrTitle, postShort };
