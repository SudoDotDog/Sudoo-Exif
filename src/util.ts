/**
 * @author WMXPY
 * @namespace Exif
 * @description Util
 */

import * as Fs from "fs";
import * as Path from "path";

export const readBufferFromPath = (path: string): Promise<Buffer> => {

    const resolved: string = Path.resolve(path);

    return new Promise<Buffer>((resolve: (result: Buffer) => void, reject: (reason: any) => void) => {

        Fs.readFile(resolved, (err: any, data: Buffer) => {
            if (err) {
                reject(err);
                return;
            }
            resolve(data);
            return;
        });
    });
};

export const writeBufferToPath = (path: string, data: Buffer): Promise<void> => {

    const resolved: string = Path.resolve(path);

    return new Promise<void>((resolve: () => void, reject: (reason: any) => void) => {

        Fs.writeFile(resolved, data, (err: any) => {
            if (err) {
                reject(err);
                return;
            }
            resolve();
            return;
        });
    });
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
