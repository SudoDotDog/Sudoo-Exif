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

export class Exif {

    public static fromBinaryString(binaryString: string): Exif {

        return new Exif(binaryString);
    }

    protected _imageData: string;
    protected _imageExif: ExifData;

    protected readonly _originalExif: ExifData;

    protected constructor(data: string) {

        this._imageData = data;

        const rawData: any = PiExif.load(this._imageData);
        const exifData: ExifData = parseForwardData(rawData);

        this._imageExif = exifData;
        this._originalExif = exifData;
    }

    public get original(): ExifData {
        return this._originalExif;
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

    public extendOrSet<T extends keyof ExifData>(
        key: T,
        value: ExifData[T],
        dump: boolean = false,
    ): this {

        const original: ExifData[T] | undefined = this._originalExif[key];

        if (typeof original !== 'undefined') {

            return this.set(key, original, dump);
        }
        return this.set(key, value, dump);
    }

    public extendOrSetIfExists<T extends keyof ExifData>(
        key: T,
        value?: ExifData[T],
        dump: boolean = false,
    ): this {

        const original: ExifData[T] | undefined = this._originalExif[key];

        if (typeof original !== 'undefined') {

            return this.set(key, original, dump);
        }

        if (typeof value === 'undefined') {
            return this;
        }

        return this.set(key, value, dump);
    }

    public set<T extends keyof ExifData>(
        key: T,
        value: ExifData[T],
        dump: boolean = false,
    ): this {

        return this.merge({
            [key]: value,
        }, dump);
    }

    public setIfExists<T extends keyof ExifData>(
        key: T,
        value?: ExifData[T],
        dump: boolean = false,
    ): this {

        if (typeof value === 'undefined') {
            return this;
        }

        return this.merge({
            [key]: value,
        }, dump);
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

    public restore(
        dump: boolean = false,
    ): this {

        return this.replace(this._originalExif, dump);
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

    public toBinaryString(): string {

        return this._imageData;
    }
}
