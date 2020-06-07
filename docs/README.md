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
import { Exif } from "../src/exif";
(async () => {
    const file: Buffer = await readBufferFile('./example.jpg');
    const exif: Exif = Exif.fromBinaryString(file.toString('binary'));

    exif.clear();
    exif.dump();
    await writeBufferFile('./out.jpg', Buffer.from(exif.toBinaryString(), 'binary'));
})();
```

## Source

-   [Exif format document](http://www.cipa.jp/std/documents/e/DC-008-2012_E.pdf)

## Reference

> Built on <https://github.com/hMatoba/piexifjs>
