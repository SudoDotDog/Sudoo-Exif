/**
 * @author WMXPY
 * @namespace Exif_Parse
 * @description Location
 */

import { Coordinate } from "@sudoo/geometry";
import { GPS_LATITUDE_REF, GPS_LONGITUDE_REF } from "../declare/enum";

export type ExifLocation = [
    [number, number],
    [number, number],
    [number, number],
];

export const formatExifLocation = (coordinate: Coordinate): {
    readonly gpsLatitudeRef: GPS_LATITUDE_REF;
    readonly gpsLatitude: ExifLocation;
    readonly gpsLongitudeRef: GPS_LONGITUDE_REF;
    readonly gpsLongitude: ExifLocation;
} => {

    const latitudeD: number = Math.floor(coordinate.latitude);
    // tslint:disable-next-line: no-magic-numbers
    const latitudeM: number = Math.floor((coordinate.latitude - latitudeD) * 60);
    // tslint:disable-next-line: no-magic-numbers
    const latitudeS: number = Math.floor((coordinate.latitude - latitudeD - latitudeM) * 60);

    console.log(latitudeD, latitudeM, latitudeS);

    return {} as any;
};

export const parseExifLocation = (
    location: {
        readonly gpsLatitudeRef?: GPS_LATITUDE_REF;
        readonly gpsLatitude?: ExifLocation;
        readonly gpsLongitudeRef?: GPS_LONGITUDE_REF;
        readonly gpsLongitude?: ExifLocation;
    },
    precision: number = 7,
): Coordinate | null => {

    if (!location.gpsLatitudeRef
        || !location.gpsLatitude
        || !location.gpsLongitudeRef
        || !location.gpsLongitude) {
        return null;
    }

    const latitudeD: number = location.gpsLatitude[0][0] / location.gpsLatitude[0][1];
    const latitudeM: number = location.gpsLatitude[1][0] / location.gpsLatitude[1][1];
    const latitudeS: number = location.gpsLatitude[2][0] / location.gpsLatitude[2][1];

    const longitudeD: number = location.gpsLongitude[0][0] / location.gpsLongitude[0][1];
    const longitudeM: number = location.gpsLongitude[1][0] / location.gpsLongitude[1][1];
    const longitudeS: number = location.gpsLongitude[2][0] / location.gpsLongitude[2][1];

    // tslint:disable-next-line: no-magic-numbers
    const latitude: number = latitudeD + (latitudeM / 60) + (latitudeS / 3600);
    // tslint:disable-next-line: no-magic-numbers
    const longitude: number = longitudeD + (longitudeM / 60) + (longitudeS / 3600);

    return {
        latitude: Number(latitude.toFixed(precision)),
        longitude: Number(longitude.toFixed(precision)),
    };
};
