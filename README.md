[![npm version](https://img.shields.io/npm/v/react-useinterval.svg?style=flat)](https://www.npmjs.com/package/react-useinterval) [![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/johndiiorio/react-useinterval/blob/master/LICENSE)

# react-useInterval
A custom React hook that wraps JavaScript's setInterval function.

## Install

Install with [npm](https://www.npmjs.com/) (or [yarn](https://yarnpkg.com/)):

```sh
$ npm install --save react-useinterval
```

## Example Usage

```js
import React, { useState } from 'react';
import useInterval from 'react-useinterval';

function Counter() {
  let [count, setCount] = useState(0);

  useInterval(() => {
    setCount(count + 1);
  }, 1000);
  return <h1>{count}</h1>;
}
```
## Thanks
Inspired by Dan Abramov's blog post [here](https://overreacted.io/making-setinterval-declarative-with-react-hooks/).
