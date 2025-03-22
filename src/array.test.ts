import { describe, expect, it } from 'vitest';
import { chunkArray, groupBy } from './array';

describe('array utility functions', () => {
  it('should be able to split an array into chunks', () => {
    const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    const chunks = chunkArray(arr, 3);
    expect(chunks).toEqual([[1, 2, 3], [4, 5, 6], [7, 8, 9], [10]]);
  });
  it('should be able to group an array of items', () => {
    const arr = [
      { name: 'Sam', age: 45 },
      { name: 'John', age: 30 },
      { name: 'Jane', age: 30 },
      { name: 'Bob', age: 45 },
    ];
    const groups = groupBy(arr, (item) => item.age);
    expect(groups).toStrictEqual(
      new Map([
        [
          30,
          [
            { name: 'John', age: 30 },
            { name: 'Jane', age: 30 },
          ],
        ],
        [
          45,
          [
            { name: 'Sam', age: 45 },
            { name: 'Bob', age: 45 },
          ],
        ],
      ]),
    );
  });
});
