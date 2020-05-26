/**
 * @author WMXPY
 * @namespace Exif
 * @description Exif
 */

import * as PiExif from "piexifjs";
import { ExifData } from "./declare/declare";
import { parseForwardData } from "./declare/forward";
import { readBufferFromPath, writeBufferToPath } from "./util";

export class Exif {

    public static fromBuffer(image: Buffer): Exif {

        const data: string = image.toString('binary');
        return new Exif(data);
    }

    public static async fromFile(path: string): Promise<Exif> {

        const result: Buffer = await readBufferFromPath(path);
        return this.fromBuffer(result);
    }

    private _data: string;

    private constructor(data: string) {

        this._data = data;
    }

    public raw(): ExifData {

        const exifData: any = PiExif.load(this._data);
        const parsed: ExifData = parseForwardData(exifData);

        return parsed;
    }

    public toBuffer(): Buffer {

        return Buffer.from(this._data, 'binary');
    }

    public async toFile(path: string): Promise<void> {

        await writeBufferToPath(path, this.toBuffer());
        return;
    }

    private _updateData(newData: string): this {

        this._data = newData;
        return this;
    }
}
