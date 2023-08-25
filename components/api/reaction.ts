import { ReactionsState } from "@/types";
import { commonDeleteFetch, commonPostFetchWithBody } from "./common";
import { reactions } from "@/const";

type Reaction = { reaction: string };

// リアクションを追加
const fetchAddReaction = async (
  shortId: number,
  reaction: string
): Promise<Reaction> => {
  return commonPostFetchWithBody<Reaction>(
    `/api/short/${shortId}/reaction/add/`,
    { reaction: reaction }
  );
};

// リアクションを削除
const fetchRemoveReaction = async (
  shortId: number,
  reaction: string
): Promise<Reaction> => {
  return commonDeleteFetch<Reaction>(`/api/short/${shortId}/reaction/remove/`, {
    reaction: reaction,
  });
};

// リアクションを更新
const fetchUpdateReaction = async (
  shortId: number,
  reaction: ReactionsState
): Promise<void> => {
  reactions.map((r) => {
    if (reaction[r].reacted) fetchAddReaction(shortId, r);
    else fetchRemoveReaction(shortId, r);
  });
};

export { fetchAddReaction, fetchRemoveReaction, fetchUpdateReaction };
