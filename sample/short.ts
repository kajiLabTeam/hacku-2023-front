import { ShortObject } from "@/types";

const shorts: ShortObject[] = [
  {
    id: 1,
    title: "Short 1",
    speaker: "ずんだもん",
    slides: [
      {
        script: "This is the first slide1",
        slide: "# First slide1\n\nThis is the first slide",
        voiceURL: "https://cdn.discordapp.com/attachments/976823205543153714/1141741786176434227/1-1.mp3",
      },
      {
        script: "This is the secound slide1",
        slide: "# Secound slide1\n\nThis is the secound slide",
        voiceURL: "https://cdn.discordapp.com/attachments/976823205543153714/1141741786499383407/1-2.mp3",
      },
      {
        script: "This is the third slide1",
        slide: "# Third slide1\n\nThis is the third slide",
        voiceURL: "https://cdn.discordapp.com/attachments/976823205543153714/1141741786818158673/1-3.mp3",
      },
    ],
    createdAt: "2021-01-01",
    reactions: {
      heart: { count: 11, reacted: true },
      good: { count: 21, reacted: false },
      smile: { count: 31, reacted: false },
    },
    tags: ["tag1", "tag2", "tag3"],
    genre: "frontend",
    poster: "satooru",
    views: 100,
  },
  {
    id: 2,
    title: "Short 2",
    speaker: "ちび式じい",
    slides: [
      {
        script: "This is the first slide2",
        slide: "# First slide2\n\nThis is the first slide",
        voiceURL: "https://cdn.discordapp.com/attachments/976823205543153714/1141741787136929932/2-1.mp3",
      },
      {
        script: "This is the secound slide2",
        slide: "# Secound slide2\n\nThis is the secound slide",
        voiceURL: "https://cdn.discordapp.com/attachments/976823205543153714/1141741787522793472/2-2.mp3",
      },
      {
        script: "This is the third slide2",
        slide: "# Third slide2\n\nThis is the third slide",
        voiceURL: "https://cdn.discordapp.com/attachments/976823205543153714/1141741787845763194/2-3.mp3",
      },
    ],
    createdAt: "2022-02-02",
    reactions: {
      heart: { count: 12, reacted: false },
      good: { count: 22, reacted: true },
      smile: { count: 32, reacted: false },
    },
    tags: ["tag1"],
    genre: "backend",
    poster: "bash",
    views: 200,
  },
  {
    id: 3,
    title: "Short 3",
    speaker: "四国めたん",
    slides: [
      {
        script: "This is the first slide3",
        slide: "# First slide3\n\nThis is the first slide",
        voiceURL: "https://cdn.discordapp.com/attachments/976823205543153714/1141741788193894470/3-1.mp3",
      },
      {
        script: "This is the secound slide3",
        slide: "# Secound slide3\n\nThis is the secound slide",
        voiceURL: "https://cdn.discordapp.com/attachments/976823205543153714/1141741788575563887/3-2.mp3",
      },
      {
        script: "This is the third slide3",
        slide: "# Third slide3\n\nThis is the third slide",
        voiceURL: "https://cdn.discordapp.com/attachments/976823205543153714/1141741788894339143/3-3.mp3",
      },
    ],
    createdAt: "2023-03-03",
    reactions: {
      heart: { count: 13, reacted: false },
      good: { count: 23, reacted: false },
      smile: { count: 33, reacted: true },
    },
    tags: ["tag1", "tag2", "tag3", "tag4"],
    genre: "backend",
    poster: "bash",
    views: 300,
  },
];

export { shorts };
