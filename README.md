# Sam's Typescript utilities

Just a heap of helper functions. That are useful for most of my projects.

## Array

- **chunkArray** - Splits an array into chunks of a set size (very useful for AWS SSM given the 10 item limit)
- **groupBy** - Pass a function to group items in an array, function should return the group field

## Functions

- **isFalsy** - simple wrapper for a falsy check to make code more readable
- **isNullish** - simple wrapper to test if something is NULL or UNDEFINED
- **sleep** - Promise for a sleep timer

## Object

- **mapObject** - Map command to run on an object rather than array
- **filterObject** - Filter command to run on an object rather than array

## Strings

- **pascalCase** - Converts a string to `pascal case` -> `PascalCase`
- **camelCase** - Converts a string to `camel case` -> `camelCase`
- **capitalise** - Capitalises a word
- **capitaliseAllWords** - Capitalises all words
- **pluralise** - Adds `s` when relevant to words (ie. 1 of something no `s`, 2 adds `s`)

## TryCatch

- **tryCatch** - Theo's tryCatch function to convert a try/catch block into something similar to Go error handling

## Types

- **Nullish** - null or undefined
- **Nullable** - a type that can be the type or Nullish
- **ValueOf** - a union of all possible values in an object
- **Falsy** - any false type
- **UnionResolver** - Converts a basic union into a structured object - usage example below
- **OmitMethods** - Object without methods, only fields
- **Branded** - Forces a type to be a certain subset - eg. you have a hash function that returns a string, but you only want another method to accept a string that has gone through that hash - so this "brands" it with a mark.

### Union Resolver Example

```typescript
type ActionType = 'ADD_TODO' | 'REMOVE_TODO' | 'UPDATE_TODO';

type ResolvedActions = UnionResolver<ActionType>;

// The resulting type will be:
// {
//   type: "ADD_TODO";
// }[] | {
//   type: "REMOVE_TODO";
// }[] | {
//   type: "UPDATE_TODO";
// }[]

const actions: ResolvedActions = [
  { type: 'ADD_TODO' },
  { type: 'REMOVE_TODO' },
  { type: 'UPDATE_TODO' },
];

// Now you can handle each action type distinctly
actions.forEach((action) => {
  switch (action.type) {
    case 'ADD_TODO':
      console.log('Adding a todo');
      break;
    case 'REMOVE_TODO':
      console.log('Removing a todo');
      break;
    case 'UPDATE_TODO':
      console.log('Updating a todo');
      break;
  }
});
```

### Branded Example

```typescript
const HashedStr = Branded<string, 'Hash'>;
const hashFn = (str: string): HashedStr => {
  return (str + 'ThisShouldBeHashed') as HashedStr;
};
const functionStringShouldBeHashed = (hash: HashedStr) => {
  // Do Someething with hash value
};
const str = 'ABC';
functionStringShouldBeHashed(str); // Error
functionStringShouldBeHashed(hashFn(str)); // No error now because of the brand
```
