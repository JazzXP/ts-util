import { describe, it, expect } from 'vitest';
import {
  camelCase,
  capitalise,
  capitaliseAllWords,
  pascalCase,
  pluralise,
} from './strings';

describe('String Utility Functions', () => {
  it('Should capitalise a string', () => {
    const str = 'hello world';
    const result = capitalise(str);
    expect(result).toBe('Hello world');
  });
  it('Should capitalise all words in a string', () => {
    const str = 'hello world how are you?';
    const result = capitaliseAllWords(str);
    expect(result).toBe('Hello World How Are You?');
  });
  it('Should convert to pascalCase', () => {
    const str = 'hello world how are you?';
    const result = pascalCase(str);
    expect(result).toBe('HelloWorldHowAreYou?');
  });
  it('Should convert to camelCase', () => {
    const str = 'hello world how are you?';
    const result = camelCase(str);
    expect(result).toBe('helloWorldHowAreYou?');
  });
  it('Should pluralise when the number of items is 0', () => {
    const str = 'item';
    const result = pluralise(0, str);
    expect(result).toBe('items');
  });
  it('Should not pluralise when the number of items is 1', () => {
    const str = 'item';
    const result = pluralise(1, str);
    expect(result).toBe('item');
  });
  it('Should pluralise when the number of items is 2', () => {
    const str = 'item';
    const result = pluralise(2, str);
    expect(result).toBe('items');
  });
});
