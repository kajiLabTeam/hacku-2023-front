import { ErrorObject, ReactionsState } from "@/types";
import { commonPostFetchWithBody } from "./common";
import { reactions } from "@/const";

type Reaction = { reaction: string };

// リアクションを追加
const addReaction = async (
  shortId: number,
  reaction: string,
  tokenId: string
): Promise<Reaction | ErrorObject> => {
  return commonPostFetchWithBody<Reaction>(
    `short/${shortId}/reaction/add/`,
    { reaction: reaction },
    tokenId
  );
};

// リアクションを削除
const deleteReaction = async (
  shortId: number,
  reaction: string,
  tokenId: string
): Promise<Reaction | ErrorObject> => {
  return commonPostFetchWithBody<Reaction>(
    `short/${shortId}/reaction/add/`,
    { reaction: reaction },
    tokenId
  );
};

// リアクションを更新
export const updateReaction = async (
  shortId: number,
  reaction: ReactionsState,
  tokenId: string
): Promise<void> => {
  reactions.map((r) => {
    if (reaction[r].reacted) addReaction(shortId, r, tokenId);
    else deleteReaction(shortId, r, tokenId);
  });
};
