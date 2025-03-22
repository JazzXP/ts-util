export const mapObject = <T extends Object>(
  obj: T,
  fn: (value: T[keyof T], key: keyof T) => T[keyof T],
): T => {
  const result: Partial<T> = {};
  (Object.keys(obj) as Array<keyof T>).forEach((key: keyof T) => {
    result[key] = fn(obj[key], key);
  });
  return result as T;
};
export const filterObject = <T extends Object>(
  obj: T,
  fn: (value: T[keyof T], key: keyof T) => boolean,
): T => {
  const result: Partial<T> = {};
  (Object.keys(obj) as Array<keyof T>).forEach((key: keyof T) => {
    if (fn(obj[key], key)) {
      result[key] = obj[key];
    }
  });
  return result as T;
};
