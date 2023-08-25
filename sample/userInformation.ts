import { UserInformationObject } from "@/types";

const userInformation: UserInformationObject = {
  achievements: [
    {
      name: "JavaScript",
      link: "/sample/js.png",
    },
    { name: "TypeScript", link: "" },
    { name: "Go", link: "" },
    { name: "MVC", link: "" },
    { name: "C", link: "" },
    { name: "C++", link: "" },
    { name: "React", link: "" },
    { name: "Docker", link: "" },
    { name: "PostgreSQL", link: "" },
    { name: "Sass", link: "" },
    { name: "FastAPI", link: "" },
    { name: "C#", link: "" },
    { name: "React", link: "" },
    {
      name: "Java",
      link: "",
    },
    {
      name: "Scala",
      link: "",
    },
    { name: "MySQL", link: "" },
    { name: "R", link: "" },
    { name: "Rust", link: "" },
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
        color: "x",
        dailyViews: [10, 15, 2, 4, 7, 1, 0],
      },
      {
        name: "モバイル",
        color: "x",
        dailyViews: [10, 4, 22, 1, 20, 11, 0],
      },
      {
        name: "ゲーム",
        color: "x",
        dailyViews: [0, 0, 0, 0, 0, 0, 0],
      },
      {
        name: "バックエンド",
        color: "x",
        dailyViews: [3, 2, 22, 0, 5, 1, 20],
      },
      {
        name: "その他",
        color: "x",
        dailyViews: [0, 0, 0, 0, 0, 0, 0],
      },
    ],
  },
};

export { userInformation };
