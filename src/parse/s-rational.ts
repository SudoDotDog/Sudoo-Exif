/**
 * @author WMXPY
 * @namespace Exif_Parse
 * @description SRational
 */

import { formatExifRational, parseExifRational } from "./rational";

export const formatExifSRational = (value?: number): [number, number] | undefined => {

    return formatExifRational(value);
};

export const parseExifSRational = (value?: [number, number]): number | undefined => {

    return parseExifRational(value);
};
