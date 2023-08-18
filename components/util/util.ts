export function cloneObjec<T>(obj: T): T {
  return JSON.parse(JSON.stringify(obj));
}
