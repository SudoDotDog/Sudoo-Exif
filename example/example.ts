/**
 * @author WMXPY
 * @namespace Example
 * @description Example
 */

import { readBufferFile, writeBufferFile } from "@sudoo/io";
import { Exif } from "../src/exif";

(async () => {

    const file: Buffer = await readBufferFile('./example.jpg');
    const exif: Exif = Exif.fromBinaryString(file.toString('binary'));

    exif.clear(true);
    await writeBufferFile('./out.jpg', Buffer.from(exif.toBinaryString(), 'binary'));
})();
