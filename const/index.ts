const pages = ["view", "post", "user", "search"] as const;

const reactions = ["heart", "good", "smile"] as const;

const speakers = [
  "ずんだもん",
  "四国めたん",
  "春日部つむぎ",
  "雨晴はう",
  "波音リツ",
  "玄野武宏",
  "白上虎太郎",
  "青山龍星",
  "冥鳴ひまり",
  "九州そら",
  "もち子さん",
  "剣崎雌雄",
  "WhiteCUL",
  "後鬼",
  "No.7",
  "ちび式じい",
  "櫻歌ミコ",
  "小夜/SAYO",
  "ナースロボ＿タイプＴ",
  "†聖騎士 紅桜†",
  "雀松朱司",
  "麒ヶ島宗麟",
  "春歌ナナ",
  "猫使アル",
  "猫使ビィ",
  "中国うさぎ",
] as const;

const genres = {
  web: "web",
  mobile: "モバイル",
  backend: "バックエンド",
  infra: "インフラ",
  game: "ゲーム",
  others: "その他",
} as const;

const genresKeys = Object.keys(genres) as (keyof typeof genres)[];
const genresValues = Object.values(genres);

export { pages, reactions, speakers, genres, genresKeys, genresValues };
