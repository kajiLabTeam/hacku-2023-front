import { ShortObject } from "@/types";

const css: ShortObject[] = [
  {
    id: 1,
    title: "CSSで幅によって見た目を変える方法",
    speaker: "ずんだもん",
    slides: [
      {
        script: "CSSで幅によって見た目を変える方法",
        slide: "# CSSで幅によって\n# 見た目を変える方法",
        voiceURL: "https://satooru.nagoya/hacku/shorts-voice/1/1.wav",
      },
      {
        script: "画面幅によってデザインを変えたいことありませんか？",
        slide: "画面幅によってデザインを変えたいこと\nありませんか？",
        voiceURL: "https://satooru.nagoya/hacku/shorts-voice/1/2.wav",
      },
      {
        script: "そんなときは @media を使うのだ",
        slide: "そんなときは `@media` を使おう！",
        voiceURL: "https://satooru.nagoya/hacku/shorts-voice/1/3.wav",
      },
      {
        script:
          "このようにすることで、幅が600px以下ではばっくぐらうんどれっど、600pxを超えるとばっくぐらうんどぶるーが適用されるのだ",
        slide:
          "```css\nbody {\n  background-color: blue;\n}\n\n@media (max-width: 600px) {\n  body {\n    background-color: red;\n  }\n}\n```",
        voiceURL: "https://satooru.nagoya/hacku/shorts-voice/1/4.wav",
      },
    ],
    createdAt: "2023-08-23",
    reactions: {
      heart: { count: 5, reacted: false },
      good: { count: 4, reacted: false },
      smile: { count: 12, reacted: false },
    },
    tags: ["tag1", "tag2", "tag3"],
    genre: "frontend",
    poster: "satooru",
    views: 100,
  },
  {
    id: 2,
    title: "CSSで中央揃えにする方法",
    speaker: "春日部つむぎ",
    slides: [
      {
        script: "CSSで中央揃えにする方法",
        slide: "# CSSで中央揃えにする方法",
        voiceURL: "https://satooru.nagoya/hacku/shorts-voice/2/1.wav",
      },
      {
        script:
          "テキストなどのインライン要素は てきすとあらいんせんたー でできるけど",
        slide: "```html\np {\n  text-align: center;\n}\n```",
        voiceURL: "https://satooru.nagoya/hacku/shorts-voice/2/2.wav",
      },
      {
        script: "でぃぶろっくようそ などのブロック要素はそううまくはいかない",
        slide: "```html\ndiv {\n  text-align: center;\n}\n```",
        voiceURL: "https://satooru.nagoya/hacku/shorts-voice/2/3.wav",
      },
      {
        script: "そんなときには まーじんいんらいんおーと を使おう",
        slide: "```html\ndiv {\n  margin-inline: auto;\n}\n```",
        voiceURL: "https://satooru.nagoya/hacku/shorts-voice/2/4.wav",
      },
      {
        script: "素晴らしいCSSライフを！",
        slide: "素晴らしいCSSライフを！",
        voiceURL: "https://satooru.nagoya/hacku/shorts-voice/2/5.wav",
      },
    ],
    createdAt: "2023-08-23",
    reactions: {
      heart: { count: 13, reacted: false },
      good: { count: 9, reacted: false },
      smile: { count: 20, reacted: false },
    },
    tags: ["tag1"],
    genre: "frontend",
    poster: "satooru",
    views: 200,
  },
  {
    id: 3,
    title: "CSSでスクロールをピタッと止める方法",
    speaker: "四国めたん",
    slides: [
      {
        script: "CSSでスクロールをピタッと止める方法",
        slide: "# CSSでスクロールをピタッと止める方法",
        voiceURL: "https://satooru.nagoya/hacku/shorts-voice/3/1.wav",
      },
      {
        script:
          "スクロールした時にこのスライドのようにピッタリ止めたいことがあるよね",
        slide: "スクロールをピッタリ止めたい！",
        voiceURL: "https://satooru.nagoya/hacku/shorts-voice/3/2.wav",
      },
      {
        script: "そんな時はスクロールスナップを使う",
        slide: "### scroll-snap を使おう！",
        voiceURL: "https://satooru.nagoya/hacku/shorts-voice/3/3.wav",
      },
      {
        script:
          "使い方は簡単！親にオーバフローわいスクロール すくろーるすなっぷたいぷ わいまんだとりー を指定し",
        slide:
          "```css\n.parent {\n  overflow-y: scroll;\n  scroll-snap-type: y mandatory;\n}\n```",
        voiceURL: "https://satooru.nagoya/hacku/shorts-voice/3/4.wav",
      },
      {
        script: "子には すくろーるすなっぷあらいん すたーと を指定する",
        slide: "```css\n.child {\n  scroll-snap-align: start;\n}\n```",
        voiceURL: "https://satooru.nagoya/hacku/shorts-voice/3/5.wav",
      },
      {
        script: "するとピッタリとまるようになる",
        slide: "```css\n.child {\n  scroll-snap-align: start;\n}\n```",
        voiceURL: "https://satooru.nagoya/hacku/shorts-voice/3/6.wav",
      },
      {
        script: "水平方向にしたければ y を x に変えるとできるよ",
        slide:
          "```css\n.parent {\n  overflow-x: scroll;\n  scroll-snap-type: x mandatory;\n}\n```",
        voiceURL: "https://satooru.nagoya/hacku/shorts-voice/3/7.wav",
      },
    ],
    createdAt: "2023-08-24",
    reactions: {
      heart: { count: 13, reacted: false },
      good: { count: 23, reacted: false },
      smile: { count: 33, reacted: false },
    },
    tags: ["tag1", "tag2", "tag3", "tag4"],
    genre: "backend",
    poster: "bash",
    views: 300,
  },
];

const go: ShortObject[] = [
  {
    id: 100,
    title: "GoでHello World",
    speaker: "ずんだもん",
    slides: [
      {
        script: "GoでHello World",
        slide: "# GoでHello World\n入門者向け",
        voiceURL: "https://satooru.nagoya/hacku/shorts-voice/1/1.wav",
      },
    ],
    createdAt: "2023-08-23",
    reactions: {
      heart: { count: 5, reacted: false },
      good: { count: 4, reacted: false },
      smile: { count: 12, reacted: false },
    },
    tags: ["tag1", "tag2", "tag3"],
    genre: "frontend",
    poster: "satooru",
    views: 100,
  },
  {
    id: 101,
    title: "Go言語で変数を定義する2つの方法",
    speaker: "春日部つむぎ",
    slides: [
      {
        script: "#　Go言語で変数を定義する2つの方法\n明示的定義と暗黙的定義",
        slide: "# Go言語で変数を定義する2つの方法\n明示的定義と暗黙的定義",
        voiceURL: "https://satooru.nagoya/hacku/shorts-voice/2/1.wav",
      },
    ],
    createdAt: "2023-08-23",
    reactions: {
      heart: { count: 13, reacted: false },
      good: { count: 9, reacted: false },
      smile: { count: 20, reacted: false },
    },
    tags: ["tag1"],
    genre: "frontend",
    poster: "satooru",
    views: 200,
  },
  {
    id: 102,
    title: "Go言語の特徴",
    speaker: "四国めたん",
    slides: [
      {
        script: "Go言語の特徴",
        slide: "# Go言語の特徴",
        voiceURL: "https://satooru.nagoya/hacku/shorts-voice/3/1.wav",
      },
    ],
    createdAt: "2023-08-24",
    reactions: {
      heart: { count: 13, reacted: false },
      good: { count: 23, reacted: false },
      smile: { count: 33, reacted: false },
    },
    tags: ["tag1", "tag2", "tag3", "tag4"],
    genre: "backend",
    poster: "bash",
    views: 300,
  },
  {
    id: 103,
    title: "猿しか分からないGo言語",
    speaker: "四国めたん",
    slides: [
      {
        script: "猿しか分からないGo言語",
        slide: "# 猿しか分からない\n# Go言語",
        voiceURL: "https://satooru.nagoya/hacku/shorts-voice/3/1.wav",
      },
    ],
    createdAt: "2023-08-24",
    reactions: {
      heart: { count: 13, reacted: false },
      good: { count: 23, reacted: false },
      smile: { count: 33, reacted: false },
    },
    tags: ["tag1", "tag2", "tag3", "tag4"],
    genre: "backend",
    poster: "bash",
    views: 300,
  },
  {
    id: 103,
    title: "RustとGoの違い",
    speaker: "四国めたん",
    slides: [
      {
        script: "RustとGoの違い",
        slide: "# RustとGoの違い",
        voiceURL: "https://satooru.nagoya/hacku/shorts-voice/3/1.wav",
      },
    ],
    createdAt: "2023-08-24",
    reactions: {
      heart: { count: 13, reacted: false },
      good: { count: 23, reacted: false },
      smile: { count: 33, reacted: false },
    },
    tags: ["tag1", "tag2", "tag3", "tag4"],
    genre: "backend",
    poster: "bash",
    views: 300,
  },
];

const allShorts = [...css, ...go];

const shorts = css;
export { shorts };
