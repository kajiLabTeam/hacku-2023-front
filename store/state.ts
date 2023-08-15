import { atom } from "recoil";
import { recoilKeyHashSet } from "./key";
import { PostShortObject } from "@/types";

const postShortState = atom<PostShortObject>({
  key: recoilKeyHashSet.postShorts,
  default: {
    title: "",
    slides: [
      {
        script: "",
        slide: "",
      },
    ],
    tags: [],
  },
});

export { postShortState };
