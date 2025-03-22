export const chunkArray = <T>(arr: Array<T>, size: number): T[][] => {
  const result: T[][] = [];
  for (let i = 0; i < arr.length; i += size) {
    result.push(arr.slice(i, i + size));
  }
  return result;
};

export const groupBy = <T>(array: Array<T>, fn: (item: T) => T[keyof T]) => {
  const map = new Map();
  array.forEach((item) => {
    const key = fn(item);
    const collection = map.get(key);
    if (!collection) {
      map.set(key, [item]);
    } else {
      collection.push(item);
    }
  });
  return map;
};
