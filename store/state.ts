import { atom } from "recoil";
import { recoilKeyHashSet } from "./key";
import { PostShortObject } from "@/types";
import { genres, speakers } from "@/const";

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

export { postShortState };
