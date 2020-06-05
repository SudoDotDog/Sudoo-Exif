/**
 * @author WMXPY
 * @namespace Exif
 * @description Util
 */

export const padZero = (original: string | number, length: number): string => {

    const text: string = original.toString();
    const difference: number = length - text.length;

    if (difference > 0) {
        return `${'0'.repeat(difference)}${original}`;
    }
    return text;
};

export const removeObjectUndefined = <T extends Record<string, any>>(object: T): Partial<T> => {

    return Object.keys(object).reduce((previous: T, key: keyof T) => {
        const current: any = object[key];
        if (Boolean(current)) {
            return {
                ...previous,
                [key]: current,
            };
        }
        return previous;
    }, {} as T);
};
