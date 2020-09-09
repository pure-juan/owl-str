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
import { str } from 'owl-str';
// or you can use like this
// import owlStr from 'owl-str';
// owlStr.str`blahblahblah`;

const string = str`Hello? Is anyone there?`;
// Hello? Is anyone there?
```


```typescript
const sql = str`
    SELECT
        *
    FROM [SOME_TABLE]
    WHERE 1=1
    ${isNotEmpty(some_variable)`
        AND [SOME_COLUMN] = :SOME_COLUMN
    `}
`
// isNotEmpty method will be ignore that string if some_variables is empty(null or undefined).
```