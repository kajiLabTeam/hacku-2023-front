import { genres, pages, reactions, speakers } from "@/const";

type Page = (typeof pages)[number];

// 1枚のスライド
type SlideObject = {
  script: string;
  slide: string;
  voiceURL: string;
};

// 投稿時の1枚のスライド
type PostSlideObject = Omit<SlideObject, "voiceURL">;

type Datetime = `${number}-${number}-${number}`;

type Reactions = (typeof reactions)[number];

// 1つのショート
type ShortObject = {
  id: number;
  title: string;
  speaker: Speaker;
  slides: SlideObject[];
  tags: string[];
  createdAt: Datetime;
  reactions: {
    [key in Reactions]: number;
  };
};

// ショートの一覧取得時
type ShortList = {
  id: number;
  title: string;
  slide: string;
  voiceURL: string;
  views: number;
  speaker: Speaker;
  poster: string;
}[];

// 投稿時のショート
type PostShortObject = Pick<ShortObject, "title" | "slides" | "tags">;

// VoiceVox のスピーカー
type Speaker = (typeof speakers)[number];

// ジャンル
type Genres = keyof typeof genres;

// 閲覧記録
type ViewRecord = {
  [key in Genres]: number;
};

// 実績
type Achievement = {
  name: string;
  link: string;
};

// ユーザー情報
type UserObject = {
  achievements: Achievement[];
  report: ViewRecord[];
};

// 履歴
type HistoryObject = {
  id: number;
  title: string;
  slide: string;
  views: number;
  poster: string;
};

// 投稿履歴
type PostHistories = {
  postHistories: HistoryObject[];
};

// 閲覧履歴
type BrowsingHistories = {
  browsingHistories: HistoryObject[];
};

export type {
  Page,
  SlideObject,
  PostSlideObject,
  Reactions,
  ShortObject,
  ShortList,
  PostShortObject,
  Speaker,
  Genres,
  ViewRecord,
  Achievement,
  UserObject,
};
