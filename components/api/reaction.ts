import { ErrorObject, ReactionObject } from "@/types";
import axios from "axios";

const postReaction = async (
  tokenId: string,
  shortId: number,
  reaction: ReactionObject
): Promise<ReactionObject | ErrorObject> => {
  try {
    const res = await axios.post(`/short/${shortId}/reaction/add/`, reaction, {
      headers: {
        Authorization: `Bearer ${tokenId}`,
      },
    });
    return res.data();
  } catch (e) {
    return { error: e } as ErrorObject;
  }
};

const deleteReaction = async (
  tokenId: string,
  shortId: number,
  reaction: ReactionObject
): Promise<ReactionObject | ErrorObject> => {
  try {
    const res = await axios.delete(`/short/${shortId}/reaction/remove/`, {
      data: reaction,
      headers: {
        Authorization: `Bearer ${tokenId}`,
      },
    });
    return res.data();
  } catch (e) {
    return { error: e } as ErrorObject;
  }
};

export { postReaction, deleteReaction };
