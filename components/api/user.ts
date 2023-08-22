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
        Authorization: `Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjYzODBlZjEyZjk1ZjkxNmNhZDdhNGNlMzg4ZDJjMmMzYzIzMDJmZGUiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoi5rC06LC356WQ55SfIiwicGljdHVyZSI6Imh0dHBzOi8vbGgzLmdvb2dsZXVzZXJjb250ZW50LmNvbS9hL0FBY0hUdGNoXzExUGZjSWpyQTRYSjJqcXF4dDk0RzNpNno0UlVZbFJLNW5kaHFRdWNSbz1zOTYtYyIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9vcGVuLWhhY2stdS0yMDIzLW5hZ295YSIsImF1ZCI6Im9wZW4taGFjay11LTIwMjMtbmFnb3lhIiwiYXV0aF90aW1lIjoxNjkyNzA0MDMyLCJ1c2VyX2lkIjoiNGM5NkhwbFB3TmRsc05FaklwUnBqU3ZNcFk3MiIsInN1YiI6IjRjOTZIcGxQd05kbHNORWpJcFJwalN2TXBZNzIiLCJpYXQiOjE2OTI3MDQwMzMsImV4cCI6MTY5MjcwNzYzMywiZW1haWwiOiJ5dXNlaTQ1MjAwMzA0MDFAZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZ29vZ2xlLmNvbSI6WyIxMDYwMjg0NDkyNjQ0NjMwNzEwODMiXSwiZW1haWwiOlsieXVzZWk0NTIwMDMwNDAxQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6Imdvb2dsZS5jb20ifX0.el_VjC0yPz9KsaWtIiaUo9r2T33qGvoE8abTHvXyKiFcWYH0Arm-IXQ2Tpd5mnMQ2nL9qet3mB6Dnlk4LNlHXwVV1P4yf3KyO5PiRMaDGr-lo12_1Dt_3w3_77WBlgu9OKI6_GYtYgSn2xT54Om16k_rzG4IFeyAADcVUKpKN8mM6tJofOURnPGzXhSm3FdVd83M38QOXYoVR6SHnebc6sZjI68mkm1Bx0CZBejQgfpWgqZui-KcAnhMhtAEoYais6Np3EeshnhkJJBrRUGB4x8UKbM1cYVyOyvvzfp_BV7wiVGH08Zm2g5vyLV3qFLPybXIuz0KThXFFaeaLCT-LA`,
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
