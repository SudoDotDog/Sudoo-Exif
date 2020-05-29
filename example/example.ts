/**
 * @author WMXPY
 * @namespace Example
 * @description Example
 */

import { Exif } from "../src/exif";

(async () => {

    const exif: Exif = await Exif.loadFromFile('./example.jpg');

    exif.merge({
        gpsLocation: {
            latitude: 1,
            longitude: 1,
        },
    });
    exif.dump();
    await exif.saveAsFile('./out.jpg');

    console.log('finished');
})();
