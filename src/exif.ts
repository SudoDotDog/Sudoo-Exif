/**
 * @author WMXPY
 * @namespace Exif
 * @description Exif
 */

export class Exif {

    public static fromBuffer(image: Buffer): Exif {

        const data: string = image.toString('binary');
        return new Exif(data);
    }

    private _data: string;

    private constructor(data: string) {

        this._data = data;
    }

    public toBuffer(): Buffer {

        return Buffer.from(this._data, 'binary');
    }

    private _updateData(newData: string): this {

        this._data = newData;
        return this;
    }
}
