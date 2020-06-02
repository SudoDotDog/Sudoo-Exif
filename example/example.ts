/**
 * @author WMXPY
 * @namespace Example
 * @description Example
 */

import { Exif } from "../src/exif";

(async () => {

    const exif: Exif = await Exif.loadFromFile('./example.jpg');

    exif.clear().merge({
        gpsLocation: {
            latitude: 41.878113,
            longitude: -70.6,
        },
    });
    exif.dump();
    await exif.saveAsFile('./out.jpg');

    console.log('finished');
})();
