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
        color: "245, 101, 101, 1",
        dailyViews: [10, 15, 2, 4, 7, 1, 0],
      },
      {
        name: "モバイル",
        color: "246, 173, 85, 1",
        dailyViews: [10, 4, 22, 1, 20, 11, 0],
      },
      {
        name: "ゲーム",
        color: "183, 148, 244, 1",
        dailyViews: [0, 0, 0, 0, 0, 0, 0],
      },
      {
        name: "バックエンド",
        color: "99, 179, 237, 1",
        dailyViews: [3, 2, 22, 0, 5, 1, 20],
      },
      {
        name: "その他",
        color: "160, 174, 192, 1",
        dailyViews: [0, 0, 0, 0, 0, 0, 0],
      },
    ],
  },
};

export { userInformation };
