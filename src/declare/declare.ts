/**
 * @author WMXPY
 * @namespace Exif_Declare
 * @description Declare
 */

import type { Coordinate } from "@sudoo/geometry";
import type { COLOR_SPACE, COMPRESSION, CONTRAST, CUSTOM_RENDERED, EXPOSURE_MODE, EXPOSURE_PROGRAM, FILE_SOURCE, FLASH, GAIN_CONTROL, GPS_ALTITUDE_REF, INTEROPERABILITY_INDEX, LIGHT_SOURCE, METERING_MODE, ORIENTATION, RESOLUTION_UNIT, SATURATION, SCENE_CAPTURE_TYPE, SCENE_TYPE, SENSING_METHOD, SENSITIVITY_TYPE, SHARPNESS, SUBJECT_DISTANCE_RANGE, WHITE_BALANCE, Y_CB_CR_POSITIONING } from "./enum";

export type Writeable<T> = {

    -readonly [P in keyof T]: T[P];
};

export type ExifData = {

    readonly thumbnail?: Buffer;

    // Interoperability
    readonly interoperabilityIndex?: INTEROPERABILITY_INDEX; // 1

    // Core
    readonly imageDescription?: string; // 270
    readonly make?: string; // 271
    readonly model?: string; // 272
    readonly orientation?: ORIENTATION; // 274
    readonly xResolution?: number; // 282
    readonly yResolution?: number; // 283
    readonly resolutionUnit?: RESOLUTION_UNIT; // 296
    readonly transferFunction?: number;
    readonly software?: string; // 305
    readonly modifyDate?: Date; // 306
    readonly yCbCrPositioning?: Y_CB_CR_POSITIONING; // 531
    readonly artist?: string; // 315
    readonly copyright?: string; // 33432
    readonly exifTag?: number; // 34665
    readonly gpdIFD?: number; // 34853

    readonly compression?: COMPRESSION; // 259
    readonly jpegInterchangeFormat?: number; // 513
    readonly jpegInterchangeFormatLength?: number; // 514

    // GPS
    readonly gpsVersionID?: number; // GPS-0
    readonly gpsLocation?: Coordinate; // GPS-1->4
    readonly gpsAltitudeRef?: GPS_ALTITUDE_REF; // GPS-5
    readonly gpsAltitude?: any; // GPS-6

    // Exif
    readonly exposureTime?: number; // 33434
    readonly fNumber?: number; // 33437
    readonly exposureProgram?: EXPOSURE_PROGRAM; // 34850
    readonly spectralSensitivity?: string; // 34852
    readonly photographicSensitivity?: number; // 34855
    readonly OECF?: number; // 34856
    readonly sensitivityType?: SENSITIVITY_TYPE; // 34864
    readonly standardOutputSensitivity?: number; // 34865
    readonly recommendedExposureIndex?: number; // 34866
    readonly exifVersion?: string; // 36864
    readonly dateTimeOriginal?: Date; // 36867
    readonly createDate?: Date; // 36868
    readonly componentsConfiguration?: string; // 37121
    readonly shutterSpeedValue?: number; // 37377
    readonly apertureValue?: number; // 37378
    readonly brightnessValue?: number; // 37379
    readonly exposureCompensation?: number; // 37380
    readonly maxApertureValue?: number; // 37381
    readonly subjectDistance?: number; // 37382
    readonly meteringMode?: METERING_MODE; // 37383
    readonly lightSource?: LIGHT_SOURCE; // 37384
    readonly flash?: FLASH; // 37385
    readonly focalLength?: number; // 37386
    readonly markerNote?: Buffer; // 37500
    readonly userComment?: Buffer; // 37510
    readonly subSecTimeOriginal?: string; // 37521
    readonly subSecTimeDigitized?: string; // 37522
    readonly flashpixVersion?: string; // 40960
    readonly colorSpace?: COLOR_SPACE; // 40961
    readonly exifImageWidth?: number; // 40962
    readonly exifImageHeight?: number; // 40963
    readonly relatedSoundFile?: string; // 40964
    readonly interoperabilityIFD?: number; // 40965
    readonly spatialFrequencyResponse?: string; // 41484
    readonly focalPlaneXResolution?: number; // 41486
    readonly focalPlaneYResolution?: number; // 41487
    readonly focalPlaneResolutionUnit?: RESOLUTION_UNIT; // 41488
    readonly exposureIndex?: number; // 41493
    readonly sensingMethod?: SENSING_METHOD; // 41495
    readonly fileSource?: FILE_SOURCE; // 41728
    readonly sceneType?: SCENE_TYPE; // 41729
    readonly cfaPattern?: string; // 41730
    readonly customRendered?: CUSTOM_RENDERED; // 41985
    readonly exposureMode?: EXPOSURE_MODE; // 41986
    readonly whiteBalance?: WHITE_BALANCE; // 41987
    readonly digitalZoomRatio?: number; // 41988
    readonly focalLengthIn35mmFilm?: number; // 41989
    readonly sceneCaptureType?: SCENE_CAPTURE_TYPE; // 41990
    readonly gainControl?: GAIN_CONTROL; // 41991
    readonly contrast?: CONTRAST; // 41992
    readonly saturation?: SATURATION; // 41993
    readonly sharpness?: SHARPNESS; // 41994
    readonly deviceSettingDescription?: string; // 41995
    readonly subjectDistanceRange?: SUBJECT_DISTANCE_RANGE; // 41996
    readonly imageUniqueID?: string; // 42016
    readonly cameraOwnerName?: string; // 42032
    readonly serialNumber?: string; // 42033
    readonly lensSpecification?: [any, any, any, any]; // 42034
    readonly lensMake?: string; // 42035
    readonly lensModel?: string; // 42036
    readonly lensSerialNumber?: string; // 42037
};
