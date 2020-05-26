/**
 * @author WMXPY
 * @namespace Exif_Declare
 * @description Declare
 */

import { CUSTOM_RENDERED, EXPOSURE_MODE, EXPOSURE_PROGRAM, LIGHT_SOURCE, METERING_MODE, RESOLUTION_UNIT, SCENE_CAPTURE_TYPE, SENSITIVITY_TYPE, WHITE_BALANCE } from "./enum";

export type ExifData = {

    readonly thumbnail: string;

    // Core
    readonly make: string;
    readonly model: string;
    readonly xResolution: [number, 1];
    readonly yResolution: [number, 1];
    readonly resolutionUnite: RESOLUTION_UNIT;
    readonly software: string;
    readonly modifyDate: Date;
    readonly artist: string;
    readonly copyright: string;
    readonly exifTag: number;

    // Exif
    readonly exposureTime: [1, number];
    readonly fNumber: [number, 1];
    readonly exposureProgram: EXPOSURE_PROGRAM;
    readonly iso: number;
    readonly sensitivityType: SENSITIVITY_TYPE;
    readonly recommendedExposureIndex: number;
    readonly exifVersion: string;
    readonly dateTimeOriginal: Date;
    readonly createDate: Date;
    readonly shutterSpeedValue: [number, number];
    readonly apertureValue: [number, number];
    readonly exposureCompensation: [1, number];
    readonly maxApertureValue: [number, 1];
    readonly meteringMode: METERING_MODE;
    readonly lightSource: LIGHT_SOURCE;
    readonly focalLength: [number, 1],
    readonly subSecTimeOriginal: string;
    readonly subSecTimeDigitized: string;
    readonly focalPlaneXResolution: [number, number];
    readonly focalPlaneYResolution: [number, number];
    readonly focalPlaneResolutionUnit: RESOLUTION_UNIT;
    readonly customRendered: CUSTOM_RENDERED;
    readonly exposureMode: EXPOSURE_MODE;
    readonly whiteBalance: WHITE_BALANCE;
    readonly sceneCaptureType: SCENE_CAPTURE_TYPE;
    readonly serialNumber: string;
    readonly lensSpecification: [any, any, any, any];
    readonly lensModel: string;
    readonly lensSerialNumber: string;
};
