import { describe, expect, it } from 'vitest';
import { isFalsy, isNullish, sleep } from './funcs'; // Update the import path as needed

describe('Utility Functions', () => {
  describe('isFalsy', () => {
    it('should return true for falsy values', () => {
      // Falsy values include: false, 0, "", null, undefined, NaN
      expect(isFalsy(false)).toBe(true);
      expect(isFalsy(0)).toBe(true);
      expect(isFalsy('')).toBe(true);
      expect(isFalsy(null)).toBe(true);
      expect(isFalsy(undefined)).toBe(true);
      expect(isFalsy(NaN)).toBe(true);
    });

    it('should return false for truthy values', () => {
      // Truthy values include: true, any non-zero number, non-empty string, etc.
      expect(isFalsy(true)).toBe(false);
      expect(isFalsy(1)).toBe(false);
      expect(isFalsy('some string')).toBe(false);
      expect(isFalsy({})).toBe(false);
      expect(isFalsy([])).toBe(false);
    });
  });

  describe('isNullish', () => {
    it('should return true for null or undefined', () => {
      expect(isNullish(null)).toBe(true);
      expect(isNullish(undefined)).toBe(true);
    });

    it('should return false for other values', () => {
      expect(isNullish(false)).toBe(false);
      expect(isNullish(0)).toBe(false);
      expect(isNullish('')).toBe(false);
      expect(isNullish('some string')).toBe(false);
      expect(isNullish([])).toBe(false);
      expect(isNullish({})).toBe(false);
    });
  });

  describe('sleep', () => {
    it('should resolve after the specified duration', async () => {
      const start = Date.now();
      await sleep(100); // sleep for 100ms
      const duration = Date.now() - start;
      expect(duration).toBeGreaterThanOrEqual(100);
      expect(duration).toBeLessThan(150); // Allowing a small margin of error
    });

    it('should resolve without errors', async () => {
      await expect(sleep(200)).resolves.toBeUndefined();
    });
  });
});
