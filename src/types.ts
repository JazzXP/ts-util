export type Nullish = null | undefined;
export type Nullable<T> = T | Nullish;
export type ValueOf<T> = T[keyof T]; // Union of all possible values in an object
export type Falsy = false | '' | 0 | null | undefined;
export type UnionResolver<T> = T extends infer U ? { type: U }[] : never;
export type OmitMethods<T> = Pick<
  T,
  { [K in keyof T]: T[K] extends Function ? never : K }[keyof T]
>;
// By declaring a unique symbol, we create a distinct marker in TypeScript.
declare const __brand: unique symbol;
// Define a Branded type that combines a base type with a brand
// eg. Branded<string, "Hash"> then you can specify an input is required to be a hashed string
export type Branded<Type, Brand> = Type & { readonly [__brand]: Brand };
