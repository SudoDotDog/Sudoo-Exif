/**
 * @author WMXPY
 * @namespace Exif_Declare
 * @description Declare
 */

import { COLOR_SPACE, COMPRESSION, CONTRAST, CUSTOM_RENDERED, EXPOSURE_MODE, EXPOSURE_PROGRAM, FILE_SOURCE, GAIN_CONTROL, GPS_ALTITUDE_REF, GPS_LATITUDE_REF, GPS_LONGITUDE_REF, INTEROPERABILITY_INDEX, LIGHT_SOURCE, METERING_MODE, ORIENTATION, RESOLUTION_UNIT, SATURATION, SCENE_CAPTURE_TYPE, SCENE_TYPE, SENSITIVITY_TYPE, SHARPNESS, SUBJECT_DISTANCE_RANGE, WHITE_BALANCE, Y_CB_CR_POSITIONING } from "./enum";

export type ExifData = {

    readonly thumbnail: string;

    // Interoperability
    readonly interoperabilityIndex: INTEROPERABILITY_INDEX; // 1

    // Core
    readonly imageDescription: string; // 270
    readonly make: string; // 271
    readonly model: string; // 272
    readonly orientation: ORIENTATION; // 274
    readonly xResolution: [number, 1]; // 282
    readonly yResolution: [number, 1]; // 283
    readonly resolutionUnit: RESOLUTION_UNIT; // 296
    readonly software: string; // 305
    readonly modifyDate: Date; // 306
    readonly yCbCrPositioning: Y_CB_CR_POSITIONING; // 531
    readonly artist: string; // 315
    readonly copyright: string; // 33432
    readonly exifTag: number; // 34665
    readonly gpdIFD: number; // 34853

    readonly compression: COMPRESSION; // 259
    readonly jpegInterchangeFormat?: number; // 513
    readonly jpegInterchangeFormatLength?: number; // 514

    // GPS
    readonly gpsVersionID: number; // GPS-0
    readonly gpsLatitudeRef: GPS_LATITUDE_REF; // GPS-1
    readonly gpsLatitude: any; // GPS-2
    readonly gpsLongitudeRef: GPS_LONGITUDE_REF; // GPS-3
    readonly gpsLongitude: any; // GPS-4
    readonly gpsAltitudeRef: GPS_ALTITUDE_REF; // GPS-5
    readonly gpsAltitude: any; // GPS-6

    // Exif
    readonly exposureTime: [1, number]; // 33434
    readonly fNumber: [number, 1]; // 33437
    readonly exposureProgram: EXPOSURE_PROGRAM; // 34850
    readonly iso: number; // 34855
    readonly sensitivityType: SENSITIVITY_TYPE; // 34864
    readonly recommendedExposureIndex: number; // 34866
    readonly exifVersion: string; // 36864
    readonly dateTimeOriginal: Date; // 36867
    readonly createDate: Date; // 36868
    readonly componentsConfiguration: string; // 37121
    readonly shutterSpeedValue: [number, number]; // 37377
    readonly apertureValue: [number, number]; // 37378
    readonly exposureCompensation: [1, number]; // 37380
    readonly maxApertureValue: [number, 1]; // 37381
    readonly meteringMode: METERING_MODE; // 37383
    readonly lightSource: LIGHT_SOURCE; // 37385
    readonly focalLength: [number, 1], // 37386
    readonly markerNode: string; // 37500
    readonly userComment: string; // 37510
    readonly subSecTimeOriginal: string; // 37521
    readonly subSecTimeDigitized: string; // 37522
    readonly flashpixVersion: string; // 40960
    readonly colorSpace: COLOR_SPACE; // 40961
    readonly exifImageWidth: number; // 40962
    readonly exifImageHeight: number; // 40963
    readonly interoperabilityIFD: number; // 40965
    readonly focalPlaneXResolution: [number, number]; // 41468
    readonly focalPlaneYResolution: [number, number]; // 41487
    readonly focalPlaneResolutionUnit: RESOLUTION_UNIT; // 41488
    readonly fileSource: FILE_SOURCE; // 41728
    readonly sceneType: SCENE_TYPE; // 41729
    readonly customRendered: CUSTOM_RENDERED; // 41985
    readonly exposureMode: EXPOSURE_MODE; // 41986
    readonly whiteBalance: WHITE_BALANCE; // 41987
    readonly digitalZoomRatio: [number, number]; // 41988
    readonly focalLengthIn35mmFilm: number; // 41989
    readonly sceneCaptureType: SCENE_CAPTURE_TYPE; // 41990
    readonly gainControl: GAIN_CONTROL; // 41991
    readonly contrast: CONTRAST; // 41992
    readonly saturation: SATURATION; // 41993
    readonly sharpness: SHARPNESS; // 41994
    readonly subjectDistanceRange: SUBJECT_DISTANCE_RANGE; // 41996
    readonly serialNumber: string; // 42033
    readonly lensSpecification: [any, any, any, any]; // 42034
    readonly lensModel: string; // 42036
    readonly lensSerialNumber: string; // 42037
};
