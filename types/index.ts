import { pages, reactions, speakers } from "@/const";

type Page = (typeof pages)[number];

// 1枚のスライド
type slideObject = {
  script: string;
  slideMd: string;
  slideUrl: string;
  voiceUrl: string;
};

type Datetime = `${number}-${number}-${number}`;

type Reactions = (typeof reactions)[number];

// 1つのショート
type ShortObject = {
  id: number;
  title: string;
  slides: slideObject[];
  tags: string[];
  created_at: Datetime;
  reactions: {
    [key in Reactions]: number;
  };
};

// 投稿時のショート
type PostShortObject = {
  title: string;
  slides: slideObject[];
  tags: string[];
};

// サムネイル
type ThumbnailObject = {
  id: number;
  title: string;
  slideMd?: string;
  slideUrl?: string;
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
  slideObject,
  Reactions,
  ShortObject,
  PostShortObject,
  ThumbnailObject,
  Speaker,
  UserObject,
};
