/**
 * @author WMXPY
 * @namespace Exif
 * @description Exif
 */

import { DraftFunction, produce } from "@sudoo/immutable";
import * as PiExif from "piexifjs";
import { ExifData, Writeable } from "./declare/declare";
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

    private constructor(data: string) {

        this._imageData = data;

        const exifData: any = PiExif.load(this._imageData);
        this._imageExif = parseForwardData(exifData);
    }

    public get data(): ExifData {

        return this._imageExif;
    }

    public replace(
        exifData: ExifData,
        dump: boolean = false,
    ): this {

        this._imageExif = exifData;
        if (dump) {
            return this.dump();
        }
        return this;
    }

    public merge(
        exifData: Partial<ExifData>,
        dump: boolean = false,
    ): this {

        return this.replace({
            ...this._imageExif,
            ...exifData,
        }, dump);
    }

    public mutate(
        draftFunction: DraftFunction<Writeable<ExifData>>,
        dump: boolean = false,
    ): this {

        return this.replace(
            produce(this.data, draftFunction),
            dump,
        );
    }

    public clear(
        dump: boolean = false,
    ): this {

        return this.replace({}, dump);
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
}
