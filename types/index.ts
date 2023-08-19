import { genres, genresKeys, pages, reactions, speakers } from "@/const";
import { ValueOf } from "next/dist/shared/lib/constants";

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

type ReactionsState = {
  [key in Reactions]: { count: number; reacted: boolean };
};

// VoiceVox のスピーカー
type Speaker = (typeof speakers)[number];

type GenreKey = keyof typeof genres | "";

type GenreValue = ValueOf<typeof genres>;

// 1つのショート
type ShortObject = {
  id: number;
  title: string;
  speaker: Speaker;
  slides: SlideObject[];
  tags: string[];
  genre: GenreKey;
  views: number;
  poster: string;
  createdAt: Datetime;
  reactions: ReactionsState;
};

// ショートの一覧取得時
type ShortList = ShortObject[];

// 投稿時のショート
type PostShortObject = {
  title: string;
  speaker: Speaker;
  slides: PostSlideObject[];
  tags: string[];
  genre: GenreKey;
};

// 閲覧記録
type ViewRecord = {
  dates: Array<Date>;
  genres: Array<Genre>;
};

// 実績
type Achievement = {
  name: string;
  link: string;
};

// ジャンル
type Genre = {
  name: string;
  color: string;
  dailyViews: number[];
};

// ユーザー情報
type UserInformationObject = {
  achievements: Achievement[];
  report: ViewRecord;
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
  ReactionsState,
  ShortObject,
  ShortList,
  PostShortObject,
  Speaker,
  GenreKey,
  GenreValue,
  ViewRecord,
  Achievement,
  UserInformationObject,
  PostHistories,
  BrowsingHistories,
};
