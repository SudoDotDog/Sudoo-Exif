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
    const parsedDigits: number = Math.min(limit, digits);

    const rational: number = Number(`1${'0'.repeat(parsedDigits)}`);

    const integerParsed: number = integer * rational;
    const decimalParsed: number = Number(`0.${decimalString.substring(0, parsedDigits)}`) * rational;

    const sum: number = integerParsed + decimalParsed;

    return [sum, rational];
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
