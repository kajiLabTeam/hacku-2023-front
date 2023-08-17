import { atom } from "recoil";
import { recoilKeyHashSet } from "./key";
import { PostShortObject } from "@/types";
import { speakers } from "@/const";

const postShortState = atom<PostShortObject>({
  key: recoilKeyHashSet.postShorts,
  default: {
    title: "",
    speaker: speakers[0],
    slides: [
      {
        script: "",
        slide: "",
      },
    ],
    tags: [],
    genre: "",
  },
});

const playingState = atom<boolean>({
  key: recoilKeyHashSet.playing,
  default: false,
});

const playingSoundState = atom<HTMLAudioElement | null>({
  key: recoilKeyHashSet.playingSound,
  default: null,
});

const playingShortIdState = atom<number>({
  key: recoilKeyHashSet.playingShortId,
  default: -1,
});

export { postShortState, playingState, playingSoundState, playingShortIdState };
