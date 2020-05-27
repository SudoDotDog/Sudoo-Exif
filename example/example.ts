/**
 * @author WMXPY
 * @namespace Example
 * @description Example
 */

import { Exif } from "../src/exif";

(async () => {

    const exif: Exif = await Exif.fromFile('./example.jpg');

    exif.dump();
    await exif.toFile('./out.jpg');

    console.log('finished');
})();
