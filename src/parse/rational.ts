/**
 * @author WMXPY
 * @namespace Exif_Parse
 * @description Rational
 */

export const formatExifRational = (
    value?: number,
    limit: number = 8,
): [number, number] | undefined => {

    if (typeof value === 'undefined') {
        return undefined;
    }

    const floored: number = Math.floor(value);
    if (floored === value) {

        return [floored, 1];
    }

    const separated: string[] = value.toString().split('.');

    if (separated.length !== 2) {
        return undefined;
    }

    const integer: number = Number(separated[0] as string);
    const decimalString: string = separated[1] as string;

    const digits: number = decimalString.length;



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
