/**
 * @author WMXPY
 * @namespace Example
 * @description Example
 */

import { Exif } from "../src/exif";

(async () => {

    const exif: Exif = await Exif.fromFile('./example.jpg');
    exif.read();
    // await exif.toFile('./out.jpg');

    console.log('finished');
})();
