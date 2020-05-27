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

export type ExifLocationCombination = {

    readonly gpsLatitudeRef: GPS_LATITUDE_REF;
    readonly gpsLatitude: ExifLocation;
    readonly gpsLongitudeRef: GPS_LONGITUDE_REF;
    readonly gpsLongitude: ExifLocation;
};

export const formatExifLocation = (coordinate: Coordinate): ExifLocationCombination => {

    const latitudeRef: GPS_LATITUDE_REF = coordinate.latitude >= 0
        ? GPS_LATITUDE_REF.NORTH
        : GPS_LATITUDE_REF.SOUTH;

    const longitudeRef: GPS_LONGITUDE_REF = coordinate.longitude >= 0
        ? GPS_LONGITUDE_REF.EAST
        : GPS_LONGITUDE_REF.WEST;

    const latitude: number = Math.abs(coordinate.latitude);
    const longitude: number = Math.abs(coordinate.longitude);

    const latitudeD: number = Math.floor(latitude);
    // tslint:disable-next-line: no-magic-numbers
    const latitudeMDecimal: number = (latitude % 1) * 60;
    const latitudeM: number = Math.floor(latitudeMDecimal);
    // tslint:disable-next-line: no-magic-numbers
    const latitudeS: number = Math.floor((latitudeMDecimal % 1) * 60 * 100000000);

    const longitudeD: number = Math.floor(longitude);
    // tslint:disable-next-line: no-magic-numbers
    const longitudeMDecimal: number = (longitude % 1) * 60;
    const longitudeM: number = Math.floor(longitudeMDecimal);
    // tslint:disable-next-line: no-magic-numbers
    const longitudeS: number = Math.floor((longitudeMDecimal % 1) * 60 * 100000000);

    return {
        gpsLatitudeRef: latitudeRef,
        // tslint:disable-next-line: no-magic-numbers
        gpsLatitude: [[latitudeD, 1], [latitudeM, 1], [latitudeS, 100000000]],
        gpsLongitudeRef: longitudeRef,
        // tslint:disable-next-line: no-magic-numbers
        gpsLongitude: [[longitudeD, 1], [longitudeM, 1], [longitudeS, 100000000]],
    };
};

export const parseExifLocation = (
    location: Partial<ExifLocationCombination>,
    precision: number = 8,
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

    const fixedLatitude: number = Number(latitude.toFixed(precision));
    const fixedLongitude: number = Number(longitude.toFixed(precision));

    const parsedLatitude: number = location.gpsLatitudeRef === GPS_LATITUDE_REF.NORTH
        ? fixedLatitude
        : -fixedLatitude;

    const parsedLongitude: number = location.gpsLongitudeRef === GPS_LONGITUDE_REF.EAST
        ? fixedLongitude
        : -fixedLongitude;

    return {
        latitude: parsedLatitude,
        longitude: parsedLongitude,
    };
};
