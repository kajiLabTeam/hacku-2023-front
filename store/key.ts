const recoilKeys = [
  "postShorts",
  "playing",
  "playingSound",
  "playingShortId",
  "signedIn",
  "userInformation",
  "postHistories",
] as const;

// Key: Keyのオブジェクト
const recoilKeyHashSet = Object.fromEntries(recoilKeys.map((k) => [k, k])) as {
  [k in (typeof recoilKeys)[number]]: k;
};

// 重複チェック
const set = new Set(recoilKeys);
if (set.size !== recoilKeys.length) {
  throw Error("recoilKeyが重複しています");
}

export { recoilKeyHashSet };
