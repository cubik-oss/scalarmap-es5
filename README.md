# ScalarMap ES5

ECMAScript 6+ `Map` with restrictions that keys are always strings. This restrictions allows the polyfill to have the same asymptotic performance as real ECMAScript Maps (unlike polyfills of maps with arbitrary keys).

Full TypeScript typings are included. Used with Typescript 2.x. Supports string union keys, string enum keys etc.

## Install

```sh
npm install --save scalarmap-es5

# or
yarn add scalarmap-es5
```

## Usage

```typescript
import { StringMap, NarrowStringMap } from "scalarmap-es5";

const map = new StringMap<number>();

map.set('a', 5); // fine
map.set(10, 5); // errors - key is not string
map.set(10, 'a'); // errors - value is not number


type Type = "a" | "b";
const byType = new NarrowStringMap<Type, number>();
byType.set('a', 10) // fine
byType.set('z', 10) // errors - 'z' is not 'a' | 'b'
byType.get('z') // errors - 'z' is not 'a' | 'b'

const types: Type[] = byType.keys() // fine - specific typings
```

If you only need a single map type you can import only the required file. Both types of stringmap are implemented
with the same code, so there is only a single file:

```typescript
import { NarrowStringMap } from "scalarmap-es5/stringmap";
import { NumberMap } from "scalarmap-es5/numbermap";
```

## Types

Keys and value types are validated. Key type defaults to `string`, but you can pass in a specified key type.

![demonstrates types being used in an editor](docs/typings.png)

## Limitations

- Doesn't attempt to support iterators, as they're a bit of a hassle to support in environments where a polyfill would be useful anyway.
