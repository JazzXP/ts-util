import { type Falsy, type Nullish } from './types';

export const isFalsy = (val: unknown): val is Falsy => !val;
export const isNullish = (val: unknown): val is Nullish => val == null;

export const sleep = (duration: number) => {
  return new Promise<void>((resolve) => {
    setTimeout(resolve, duration);
  });
};
