import { Reactions, ReactionsState } from "@/types";
import { useState } from "react";

export default function useReaction(defaultState: ReactionsState) {
  const [reactionsState, setReactionsState] = useState(defaultState);
  const [defaultReaction] = useState(defaultState);

  // reaction を付ける
  function addReaction(reaction: Reactions) {
    const clonedReaction = structuredClone(reactionsState);
    clonedReaction[reaction].reacted = true;

    if (defaultReaction[reaction].reacted) {
      clonedReaction[reaction].count = defaultReaction[reaction].count;
    } else {
      clonedReaction[reaction].count = defaultReaction[reaction].count + 1;
    }

    setReactionsState(clonedReaction);
  }

  // reaction を外す
  function removeReaction(reaction: Reactions) {
    const clonedReaction = structuredClone(reactionsState);
    clonedReaction[reaction].reacted = false;
    clonedReaction[reaction].count = defaultReaction[reaction].count;

    if (defaultReaction[reaction].reacted) {
      clonedReaction[reaction].count = defaultReaction[reaction].count - 1;
    } else {
      clonedReaction[reaction].count = defaultReaction[reaction].count;
    }

    setReactionsState(clonedReaction);
  }

  return [reactionsState, { removeReaction, addReaction }] as const;
}
