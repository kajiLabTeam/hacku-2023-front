import { pages, reactions, speakers } from "@/const";

type Page = (typeof pages)[number];

// 1枚のスライド
type SlideObject = {
  script: string;
  slide: string;
  voiceURL: string;
};

// 投稿時の1枚のスライド
type PostSlideObject = {
  script: string;
  slide: string;
};

type Datetime = `${number}-${number}-${number}`;

type Reactions = (typeof reactions)[number];

// 1つのショート
type ShortObject = {
  id: number;
  title: string;
  slides: SlideObject[];
  tags: string[];
  created_at: Datetime;
  reactions: {
    [key in Reactions]: number;
  };
};

// 投稿時のショート
type PostShortObject = {
  title: string;
  slides: PostSlideObject[];
  tags: string[];
};

// VoiceVox のスピーカー
type Speaker = (typeof speakers)[number];

// 閲覧記録
type ViewRecord = {
  date: Datetime;
  frontend: number;
  backend: number;
  infra: number;
};

// 実績
type Achievement = {
  name: string;
  link: string;
};

// ユーザー情報
type UserObject = {
  achievements: Achievement[];
  genres: ViewRecord[];
};

export type {
  Page,
  SlideObject,
  PostSlideObject,
  Reactions,
  ShortObject,
  PostShortObject,
  Speaker,
  UserObject,
};
