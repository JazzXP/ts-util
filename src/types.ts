export type Nullish = null | undefined;
export type Nullable<T> = T | Nullish;
export type ValueOf<T> = T[keyof T]; // Union of all possible values in an object
export type Falsy = false | '' | 0 | null | undefined;
export type UnionResolver<T> = T extends infer U ? { type: U }[] : never;
export type OmitMethods<T> = Pick<
  T,
  { [K in keyof T]: T[K] extends Function ? never : K }[keyof T]
>;
