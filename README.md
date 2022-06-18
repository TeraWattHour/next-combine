# next-combine

next-combine is a micro-library that allows fast creation of middleware-like functions that are composed into a single Next.js 'get' function

## Prerequisites

Next.js 12

## Installation

```
npm install next-combine
```

## Usage

next-combine allows you to return additional properties from each handler. Those properties are:

- `notFound: boolean` - behaves exactly like it's Next.js counterpart but also halts the execution of the next functions
- `redirect: Redirect` - behaves exactly like it's Next.js counterpart but also halts the execution of the next functions
- `break: boolean` - halts the execution of the next functions

#### getServerSideProps

```js
import { composeServerSideProps } from "next-combine";

export const getServerSideProps = composeServerSideProps(
  async (ctx) => {
    return { props: { hello: "world" }, break: true };
  },
  async (ctx) => {
    return { props: { hello: "github" } };
  }
);
```

will return `{ props: { hello: 'world' } }`
