/**
 * @author WMXPY
 * @namespace Exif
 * @description Util
 */

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
