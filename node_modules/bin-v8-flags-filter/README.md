# bin-v8-flags-filter
[![Build Status](https://api.travis-ci.org/inikulin/bin-v8-flags-filter.svg)](https://travis-ci.org/inikulin/bin-v8-flags-filter)

*Filters out v8 flags for your Node.js CLIs.*

Filters out well-known v8 flags given to your app and spawns new process with v8 flags passed to Node.js and the rest
of the args passed to your actual CLI. Basically an extraction of related [mocha code](https://github.com/mochajs/mocha/blob/master/bin/mocha).

## Install
```
npm install bin-v8-flags-filter
```

## Usage
*In JS file specified as `bin` in your `package.json`:*
```js
const v8FlagsFilter = require('bin-v8-flags-filter');
const path = require('path');

const cliPath = path.join(__dirname, './cli.js'); // Path to your actual CLI file that contains app code.

v8FlagsFilter(cliPath);
```

## Author
[Ivan Nikulin](https://github.com/inikulin) (ifaaan@gmail.com)
