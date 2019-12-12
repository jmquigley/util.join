# util.join

> Joins and normalizes a file path into a unix path.

[![build](https://github.com/jmquigley/util.join/workflows/build/badge.svg)](https://github.com/jmquigley/util.join/actions)
[![analysis](https://img.shields.io/badge/analysis-tslint-9cf.svg)](https://palantir.github.io/tslint/)
[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)](https://github.com/prettier/prettier)
[![testing](https://img.shields.io/badge/testing-jest-blue.svg)](https://facebook.github.io/jest/)
[![NPM](https://img.shields.io/npm/v/util.join.svg)](https://www.npmjs.com/package/util.join)


Using the node `path.join()` on Windows results in a backslash path separator.  Using it on OSX or Linux uses a forward slash.  This function is a wrapper that will perform the node join and then normalize all path separators using the forward slash.  e.g. the path:

    C:\blah\blah\blah

will become:

    C:/blah/blah/blah

OSX/Linux paths will work the same.  This function will also detect the "home" path leader (`~/`, `~\`, or `~`) and expand it.


## Installation

This module uses [yarn](https://yarnpkg.com/en/) to manage dependencies and run scripts for development.

To install as an application dependency:
```
$ yarn add --dev util.join
```

To build the app and run all tests:
```
$ yarn run all
```


## Usage

```javascript
const join = require('util.join');

let s = join('C:\\', 'blah', 'blah', 'blah');
console.log(s);

// prints the path 'C:/blah/blah/blah'
```
