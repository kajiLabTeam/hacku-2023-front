export function cloneObjec<T>(obj: T): T {
  return JSON.parse(JSON.stringify(obj));
}

export function formatNumber(views: number): string {
  if (views >= 10000) {
    return `${Math.floor(views / 10000)}万`;
  } else if (views >= 1000) {
    return `${Math.floor(views / 1000)}千`;
  } else {
    return views.toString();
  }
}
