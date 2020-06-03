/**
 * @author WMXPY
 * @namespace Exif_Parse
 * @description Buffer
 */

export const formatExifBuffer = (value: Buffer | undefined): string | undefined => {

    if (!Boolean(value)) {
        return undefined;
    }

    const final: Buffer = value as Buffer;
    return final.toString('binary');
};

export const parseExifBuffer = (value?: string): Buffer | undefined => {

    if (Boolean(value)) {
        return Buffer.from(value as string, 'binary');
    }
    return undefined;
};
