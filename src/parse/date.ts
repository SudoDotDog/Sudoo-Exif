/**
 * @author WMXPY
 * @namespace Exif_Parse
 * @description Date
 */

export const formatExifDate = (date?: Date): string | undefined => {

    if (typeof date === 'undefined') {
        return undefined;
    }

    const year: number = date.getUTCFullYear();
    const month: number = date.getUTCMonth();
    const day: number = date.getUTCDate();

    const hour: number = date.getUTCHours();
    const minute: number = date.getUTCMinutes();
    const second: number = date.getUTCSeconds();

    return `${year}:${month}:${day} ${hour}:${minute}:${second}`;
};

export const parseExifDate = (time?: string): Date | undefined => {

    if (typeof time === 'undefined' || time === null) {
        return undefined;
    }

    const spaceSplited: string[] = time.split(' ');

    if (spaceSplited.length !== 2) {
        return undefined;
    }

    const spaceFirst: string = spaceSplited[0];
    const spaceSecond: string = spaceSplited[1];

    const doubleSplitedFirst: string[] = spaceFirst.split(':');
    const doubleSplitedSecond: string[] = spaceSecond.split(':');

    if (doubleSplitedFirst.length !== 3
        || doubleSplitedSecond.length !== 3) {
        return undefined;
    }

    const year: number = Number(doubleSplitedFirst[0]);
    const month: number = Number(doubleSplitedFirst[1]);
    const day: number = Number(doubleSplitedFirst[2]);

    const hour: number = Number(doubleSplitedSecond[0]);
    const minute: number = Number(doubleSplitedSecond[1]);
    const second: number = Number(doubleSplitedSecond[2]);

    if (!Boolean(year) || !Boolean(month) || !Boolean(day)
        || !Boolean(hour) || !Boolean(minute) || !Boolean(second)) {
        return undefined;
    }

    const date: Date = new Date();
    date.setUTCFullYear(year);
    date.setUTCMonth(month);
    date.setUTCDate(day);
    date.setUTCHours(hour);
    date.setUTCMinutes(minute);
    date.setUTCSeconds(second);

    return date;
};
