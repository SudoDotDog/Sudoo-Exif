# Sudoo-Exif

[![Build Status](https://travis-ci.com/SudoDotDog/Sudoo-Exif.svg?branch=master)](https://travis-ci.com/SudoDotDog/Sudoo-Exif)
[![codecov](https://codecov.io/gh/SudoDotDog/Sudoo-Exif/branch/master/graph/badge.svg)](https://codecov.io/gh/SudoDotDog/Sudoo-Exif)
[![npm version](https://badge.fury.io/js/%40sudoo%2Fexif.svg)](https://www.npmjs.com/package/@sudoo/exif)
[![downloads](https://img.shields.io/npm/dm/@sudoo/exif.svg)](https://www.npmjs.com/package/@sudoo/exif)

:sparkler: Exif parser

## Install

```sh
yarn add @sudoo/exif 
yarn add @sudoo/geometry @sudoo/immutable # As peer dependencies
# or
npm install @sudoo/exif --save
npm install @sudoo/geometry @sudoo/immutable --save # As peer dependencies
```

## Example

```ts
import { Exif } from "exif";
const exif: Exif = Exif.fromBinaryString("<Exif Binary String>");
```

This package only contains pure functions.

For NodeJS file system API and usage, visit [Sudoo-Exif-Node](//exif-node.sudo.dog) for more details.

## Source

-   [Exif format document](http://www.cipa.jp/std/documents/e/DC-008-2012_E.pdf)

## Reference

> Built on <https://github.com/hMatoba/piexifjs>
