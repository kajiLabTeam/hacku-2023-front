import { atom } from "recoil";
import { recoilKeyHashSet } from "./key";
import { PostHistories, PostShortObject, UserInformationObject } from "@/types";
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

const userInformationState = atom<UserInformationObject>({
  key: recoilKeyHashSet.userInformation,
  default: {
    achievements: [
      {
        name: "JavaScript",
        link: "https://firebasestorage.googleapis.com/v0/b/open-hack-u-2023-nagoya.appspot.com/o/javascript_original_logo_icon_146455.png?alt=media&token=b29f59fb-fbf1-4220-8c7d-9beef06b927e",
      },
      { name: "TypeScript", link: "" },
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
        link: "https://firebasestorage.googleapis.com/v0/b/open-hack-u-2023-nagoya.appspot.com/o/java_original_wordmark_logo_icon_146459.png?alt=media&token=639cd4c3-7a42-4d5c-bbfb-f26ec939a0c7",
      },
      {
        name: "Docker",
        link: "https://firebasestorage.googleapis.com/v0/b/open-hack-u-2023-nagoya.appspot.com/o/file_type_docker_icon_130643.png?alt=media&token=ea7d8b0b-d67d-4fdd-a181-f9872e8966cf",
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
      ],
    },
  },
});

export { postShortState, postHistoryState, userInformationState };
