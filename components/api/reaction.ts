import { ReactionsState } from "@/types";
import { commonDeleteFetch, commonPostFetch } from "./common";
import { reactions } from "@/const";

type Reaction = { reaction: string };

// リアクションを追加
const fetchAddReaction = async (
  shortId: number,
  reaction: string,
  tokenId: string
): Promise<Reaction> => {
  return commonPostFetch<Reaction>(
    `/api/short/${shortId}/reaction/add/`,
    { reaction: reaction },
    tokenId
  );
};

// リアクションを削除
const fetchRemoveReaction = async (
  shortId: number,
  reaction: string,
  tokenId: string
): Promise<Reaction> => {
  return commonDeleteFetch<Reaction>(
    `/api/short/${shortId}/reaction/remove/`,
    { reaction },
    tokenId
  );
};

// リアクションを更新
const fetchUpdateReaction = async (
  shortId: number,
  reaction: ReactionsState,
  tokenId: string
): Promise<void> => {
  reactions.map((r) => {
    if (reaction[r].reacted) fetchAddReaction(shortId, r, tokenId);
    else fetchRemoveReaction(shortId, r, tokenId);
  });
};

export { fetchAddReaction, fetchRemoveReaction, fetchUpdateReaction };
