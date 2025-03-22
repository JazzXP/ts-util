import { describe, expect, it } from 'vitest';
import { filterObject, mapObject } from './object';

describe('Object Utilities', () => {
  it('should be able to map over an object like an array', () => {
    // ARRANGE
    const obj = {
      a: 1,
      b: 2,
      c: 3,
    };

    // ACT
    const result = mapObject(obj, (value, key) => {
      if (key === 'b') return value;
      return value * 2;
    });

    // ASSERT
    expect(result).toStrictEqual({
      a: 2,
      b: 2,
      c: 6,
    });
  });
  it('should be able to filter an object like an array', () => {
    // ARRANGE
    const obj = {
      a: 1,
      b: 2,
      c: 3,
    };

    // ACT
    const result = filterObject(obj, (_, key) => key !== 'b');

    // ASSERT
    expect(result).toStrictEqual({
      a: 1,
      c: 3,
    });
  });
});
