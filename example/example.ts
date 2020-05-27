/**
 * @author WMXPY
 * @namespace Example
 * @description Example
 */

import { ExifData } from "../src/declare/declare";
import { Exif } from "../src/exif";

(async () => {

    const exif: Exif = await Exif.fromFile('./example.jpg');
    const data: ExifData = exif.exif();

    console.log(data);
    // await exif.toFile('./out.jpg');

    console.log('finished');
})();
