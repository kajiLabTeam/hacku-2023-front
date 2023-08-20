import { atom } from "recoil";
import { recoilKeyHashSet } from "./key";
import {
  BrowsingHistories,
  PostHistories,
  PostShortObject,
  UserInformationObject,
} from "@/types";
import { speakers } from "@/const";
import { User } from "firebase/auth";

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

const userState = atom<User | null>({
  key: recoilKeyHashSet.signedIn,
  default: null,
});

const postHistoryState = atom<PostHistories>({
  key: recoilKeyHashSet.postHistories,
  default: {
    postHistories: [
      {
        id: 1,
        title: "10秒でわかるJavaScript",
        slide: "# JSとは\n- 型がないのでエラーがでない！！",
        views: 10,
        poster: "Hikakin",
      },
      {
        id: 2,
        title: "1分で年収1000万",
        slide: "Pythonは型がないので初心者におすすめ！",
        views: 100,
        poster: "Hikakin",
      },
      {
        id: 3,
        title: "猿しかわからないGolang講座",
        slide: "# Goの学び方",
        views: 7777,
        poster: "Hikakin",
      },
      {
        id: 1,
        title: "10秒でわかるJavaScript",
        slide: "# JSとは\n- 型がないのでエラーがでない！！",
        views: 10,
        poster: "Hikakin",
      },
      {
        id: 2,
        title: "1分で年収1000万",
        slide: "Pythonは型がないので初心者におすすめ！",
        views: 100,
        poster: "Hikakin",
      },
      {
        id: 3,
        title: "猿しかわからないGolang講座",
        slide: "# Goの学び方",
        views: 7777,
        poster: "Hikakin",
      },
      {
        id: 1,
        title: "10秒でわかるJavaScript",
        slide: "# JSとは\n- 型がないのでエラーがでない！！",
        views: 10,
        poster: "Hikakin",
      },
      {
        id: 2,
        title: "1分で年収1000万",
        slide: "Pythonは型がないので初心者におすすめ！",
        views: 100,
        poster: "Hikakin",
      },
      {
        id: 3,
        title: "猿しかわからないGolang講座",
        slide: "# Goの学び方",
        views: 7777,
        poster: "Hikakin",
      },
      {
        id: 1,
        title: "10秒でわかるJavaScript",
        slide: "# JSとは\n- 型がないのでエラーがでない！！",
        views: 10,
        poster: "Hikakin",
      },
      {
        id: 2,
        title: "1分で年収1000万",
        slide: "Pythonは型がないので初心者におすすめ！",
        views: 100,
        poster: "Hikakin",
      },
      {
        id: 3,
        title: "猿しかわからないGolang講座",
        slide: "# Goの学び方",
        views: 7777,
        poster: "Hikakin",
      },
      {
        id: 1,
        title: "10秒でわかるJavaScript",
        slide: "# JSとは\n- 型がないのでエラーがでない！！",
        views: 10,
        poster: "Hikakin",
      },
      {
        id: 2,
        title: "1分で年収1000万",
        slide: "Pythonは型がないので初心者におすすめ！",
        views: 100,
        poster: "Hikakin",
      },
      {
        id: 3,
        title: "猿しかわからないGolang講座",
        slide: "# Goの学び方",
        views: 7777,
        poster: "Hikakin",
      },
    ],
  },
});

const browsingHistoryState = atom<BrowsingHistories>({
  key: recoilKeyHashSet.browsingHistories,
  default: {
    browsingHistories: [
      {
        id: 3,
        title: "猿しかわからないGolang講座",
        slide: "# Goの学び方",
        views: 7777,
        poster: "Hikakin",
      },
      {
        id: 1,
        title: "10秒でわかるJavaScript",
        slide: "# JSとは\n- 型がないのでエラーがでない！！",
        views: 10,
        poster: "Hikakin",
      },
      {
        id: 2,
        title: "1分で年収1000万",
        slide: "Pythonは型がないので初心者におすすめ！",
        views: 100,
        poster: "Hikakin",
      },
      {
        id: 3,
        title: "猿しかわからないGolang講座",
        slide: "# Goの学び方",
        views: 7777,
        poster: "Hikakin",
      },
      {
        id: 1,
        title: "10秒でわかるJavaScript",
        slide: "# JSとは\n- 型がないのでエラーがでない！！",
        views: 10,
        poster: "Hikakin",
      },
      {
        id: 2,
        title: "1分で年収1000万",
        slide: "Pythonは型がないので初心者におすすめ！",
        views: 100,
        poster: "Hikakin",
      },
      {
        id: 3,
        title: "猿しかわからないGolang講座",
        slide: "# Goの学び方",
        views: 7777,
        poster: "Hikakin",
      },
    ],
  },
});

const userInformationState = atom<UserInformationObject>({
  key: recoilKeyHashSet.userInformation,
  default: {
    achievements: [
      {
        name: "JavaScript",
        link: "tps://firebasest",
      },
      {
        name: "TypeScript",
        link: "https://firebasestorage.googleapis.com/v0/b/open-hack-u-2023-nagoya.appspot.com/o/image%2FTypescript_logo_2020.svg.png?alt=media&token=3405f199-1327-43de-b08e-669ab8df11d4",
      },
      { name: "Go", link: "" },
      { name: "MVC", link: "" },
      { name: "C", link: "" },
      { name: "C++", link: "" },
      { name: "React", link: "" },
      { name: "Docker", link: "" },
      { name: "MySQL", link: "" },
      { name: "Sass", link: "" },
      { name: "FastAPI", link: "" },
      { name: "C++", link: "" },
      { name: "React", link: "" },
      {
        name: "Java",
        link: "",
      },
      {
        name: "Docker",
        link: "",
      },
      { name: "MySQL", link: "" },
      { name: "Sass", link: "" },
      { name: "FastAPI", link: "" },
    ],
    report: {
      dates: [
        new Date("2023-08-10 00:00:00 +0900"),
        new Date("2023-08-12 00:00:00 +0900"),
        new Date("2023-08-13 00:00:00 +0900"),
        new Date("2023-08-14 00:00:00 +0900"),
        new Date("2023-08-15 00:00:00 +0900"),
        new Date("2023-08-16 00:00:00 +0900"),
        new Date("2023-08-17 00:00:00 +0900"),
      ],
      genres: [
        {
          name: "web",
          color: "245, 101, 101, 1",
          dailyViews: [10, 4, 22, 1, 97, 111, 0],
        },
        {
          name: "モバイル",
          color: "246, 173, 85, 1",
          dailyViews: [10, 4, 22, 1, 97, 111, 0],
        },
        {
          name: "ゲーム",
          color: "183, 148, 244, 1",
          dailyViews: [73, 22, 6, 100, 22, 63, 52],
        },
        {
          name: "バックエンド",
          color: "99, 179, 237, 1",
          dailyViews: [20, 11, 44, 22, 43, 4, 76],
        },
        {
          name: "その他",
          color: "160, 174, 192, 1",
          dailyViews: [20, 11, 44, 22, 43, 4, 76],
        },
      ],
    },
  },
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
};
