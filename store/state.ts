import { atom } from "recoil";
import { recoilKeyHashSet } from "./key";
import {
  BrowsingHistories,
  PostHistories,
  PostShortObject,
  ShortList,
  UserInformationObject,
} from "@/types";
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

const userState = atom<string | null>({
  key: recoilKeyHashSet.signedIn,
  default: null,
});

const postHistoryState = atom<PostHistories>({
  key: recoilKeyHashSet.postHistories,
  default: { postHistories: [] },
});

const browsingHistoryState = atom<BrowsingHistories>({
  key: recoilKeyHashSet.browsingHistories,
  default: { browsingHistories: [] },
});

const userInformationState = atom<UserInformationObject>({
  key: recoilKeyHashSet.userInformation,
  default: { achievements: [], report: { dates: [], genres: [] } },
});

const shortsState = atom<ShortList>({
  key: recoilKeyHashSet.shorts,
  default: [],
});

export {
  postShortState,
  postHistoryState,
  browsingHistoryState,
  userInformationState,
  playingState,
  playingSoundState,
  playingShortIdState,
  userState,
  shortsState,
};
