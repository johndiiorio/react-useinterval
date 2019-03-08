[![npm version](https://img.shields.io/npm/v/react-useinterval.svg?style=flat)](https://www.npmjs.com/package/react-useinterval) [![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/johndiiorio/react-useinterval/blob/master/LICENSE)

# react-useInterval
A custom React hook that wraps JavaScript's setInterval function.

## Install

Install with [npm](https://www.npmjs.com/) (or [yarn](https://yarnpkg.com/)):

```sh
$ npm install --save react-useinterval
```

## API

**useInterval(callback, delay, ...args)**

| Property | Type | Required | Description |
|----------|------| -------- |-------------|
*callback* | `Function` | Yes | A function to be executed every *delay* milliseconds.
*delay*    | `Number`, `undefined`, or `null` | No | The time, in milliseconds, that the timer should delay in between executions of the specified function. Note: If `undefined` or `null` is passed, the interval will be paused. |
| *...args* | `Any` | No | Additional arguments which are passed through to the function specified by *callback*. |

## Example Usage

This creates a counter that counts up by five every second.

```js
import React, { useState } from 'react';
import useInterval from 'react-useinterval';

function Counter() {
  let [count, setCount] = useState(0);

  const increaseCount = (amount = 1) => {
    setCount(count + amount);
  };

  useInterval(increaseCount, 1000, 5);
  return <h1>{count}</h1>;
}
```
## Thanks
Inspired by Dan Abramov's blog post [here](https://overreacted.io/making-setinterval-declarative-with-react-hooks/).
