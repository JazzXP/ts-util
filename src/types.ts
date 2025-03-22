export type Nullish = null | undefined;
export type Nullable<T> = T | Nullish;
export type ValueOf<T> = T[keyof T]; // Union of all possible values in an object
export type Falsy = false | '' | 0 | null | undefined;
