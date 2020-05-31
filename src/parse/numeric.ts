/**
 * @author WMXPY
 * @namespace Exif_Parse
 * @description Numeric
 */

export const formatExifRational = (value?: number): [number, number] | undefined => {

    if (typeof value === 'undefined') {
        return undefined;
    }

    const floored: number = Math.floor(value);
    if (floored === value) {

        return [floored, 1];
    }

    // tslint:disable-next-line: no-magic-numbers
    return [Math.floor(value * 100000000), 100000000];
};

export const parseExifRational = (value?: [number, number]): number | undefined => {

    if (typeof value === 'undefined') {
        return undefined;
    }

    if (value.length !== 2) {
        return undefined;
    }

    return value[0] / value[1];
};
