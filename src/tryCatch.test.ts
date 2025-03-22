import { describe, it, expect } from 'vitest';
import { tryCatch } from './tryCatch';

describe('tryCatch', () => {
  it('should return the result of the function if it succeeds', async () => {
    const result = await tryCatch((async () => 42)());
    expect(result).toStrictEqual({ data: 42, error: null });
  });
  it('should return the error if it throws', async () => {
    const result = await tryCatch(
      (async () => {
        throw new Error('Error');
      })(),
    );

    expect(result).toStrictEqual({ data: null, error: new Error('Error') });
  });
});
