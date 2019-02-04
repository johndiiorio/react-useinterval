## Install

Install with [npm](https://www.npmjs.com/):

```sh
$ npm install --save react-useinterval
```

## Usage

```js
import React, { useState, useEffect, useRef } from 'react';
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