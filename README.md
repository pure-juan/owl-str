# owl-str

<div align="center">
    <b style="font-size: 1.5em">Make a string with <code>owl-str</code>!</b>
</div>

## Installation

You can download via `npm`, `yarn`

```bash
npm i owl-str
```

or

```bash
yarn add owl-str
```

## Usage

You can make (sql or whatever) string more easier with tagged template literals!

```typescript
import { str } from "owl-str";
// or you can use like this
// import owlStr from 'owl-str';
// owlStr.str`blahblahblah`;

const payload = {
  arg: true,
};

const string = str<typeof payload>`Hello? Is anyone there?\n${({ arg }) =>
  arg ? "Yes" : "Nope"}`;

string(payload);
// Hello? Is anyone there?
// Yes
```

```typescript
import { str, isTrue, isNotEmpty } from "owl-str";

const payload = {
  some_function: () => (Math.floor(Math.random() * 101) >= 50 ? true : false),
};

const sql = str<typeof payload>`
    SELECT
        *
    FROM [SOME_TABLE]
    WHERE 1=1
    ${(props) => isTrue(props["some_function"]())`
        AND [SOME_COLUMN] = :SOME_COLUMN
    `}
    ${isNotEmpty(some_variable)`
        AND [SOME_COLUMN] = :SOME_COLUMN
    `}
`;

sql(payload);
// isNotEmpty method will be ignore that string if some_variables is empty(null or undefined).
// props in string will provide as the payload
```

## Documents

### raw

> This is string template made by owl-str,
> you don't need to use this.

This is only for this package.

### str

> This is the base function of tagged template literals for our package.

```javascript
const str = <T>(payload: T)
```

str can have a payload

This payload will provide to child function in string as the arguments.

### emptyStr

> This is the void.
> This function always return empty string('')

### isNotEmpty, isEmpty

> This methods are make a string with arguments.
> If you provide (empty or not empty) string, It will ignore the string what you provide, or not

### isTrue, isFalse

> This is just check the argument and return the string or not

Let me know if I wrote something wrong.
(juan003@naver.com or kimjuan220@gmail.com or [github issue](https://github.com/pure-juan/owl-str/issues/new))
