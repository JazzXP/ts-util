export const pascalCase = (str: string): string =>
  capitaliseAllWords(str).split(' ').join('');
export const camelCase = (str: string): string => {
  const pascal = pascalCase(str);
  return pascal.charAt(0).toLowerCase() + pascal.slice(1);
};
export const capitalise = (string: string) =>
  string.charAt(0).toUpperCase() + string.slice(1);

export const capitaliseAllWords = (string: string) =>
  string.replace(
    /\w\S*/g,
    (txt) => txt.charAt(0).toUpperCase() + txt.substring(1).toLowerCase(),
  );
export const pluralise = (count: number, noun: string, suffix = 's') =>
  `${noun}${Math.abs(count) !== 1 ? suffix : ''}`;
