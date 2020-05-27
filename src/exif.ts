/**
 * @author WMXPY
 * @namespace Exif
 * @description Exif
 */

import * as PiExif from "piexifjs";
import { ExifData } from "./declare/declare";
import { parseForwardData } from "./declare/forward";
import { reverseExifData } from "./declare/reverse";
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

    private _imageData: string;
    private _imageExif: ExifData;

    private _needUpdate: boolean;

    private constructor(data: string) {

        this._imageData = data;

        const exifData: any = PiExif.load(this._imageData);
        this._imageExif = parseForwardData(exifData);

        this._needUpdate = false;
    }

    public exif(): ExifData {

        return this._imageExif;
    }

    public dump(): this {

        const exifData: any = reverseExifData(this._imageExif);
        const exifBytes: any = PiExif.dump(exifData);

        this._imageData = PiExif.insert(exifBytes, this._imageData);
        return this;
    }

    public toBuffer(): Buffer {

        return Buffer.from(this._imageData, 'binary');
    }

    public async toFile(path: string): Promise<void> {

        await writeBufferToPath(path, this.toBuffer());
        return;
    }

    private _updateData(newData: string): this {

        this._imageData = newData;
        this._needUpdate = true;
        return this;
    }
}
