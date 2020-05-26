/**
 * @author WMXPY
 * @namespace Exif_Declare
 * @description Forward
 */

import { ExifData } from "./declare";

export const parseForwardData = (original: any): ExifData => {

    // tslint:disable: no-string-literal
    return {
        thumbnail: original.thumbnail,

        // Core
        make: original['0th']['271'],
        model: original['0th']['272'],
        xResolution: original['0th']['282'],
        yResolution: original['0th']['283'],
        resolutionUnite: original['0th']['296'],
        software: original['0th']['305'],
        modifyDate: new Date(original['0th']['306']),
        artist: original['0th']['315'],
        copyright: original['0th']['33432'],
        exifTag: original['0th']['34665'],

        compression: original['1st']['259'],
        jpegInterchangeFormat: original['1st']['513'],
        jpegInterchangeFormatLength: original['1st']['514'],

        // Exif
        exposureTime: original['Exif']['33434'],
        fNumber: original['Exif']['33437'],
        exposureProgram: original['Exif']['34850'],
        iso: original['Exif']['34855'],
        sensitivityType: original['Exif']['34864'],
        recommendedExposureIndex: original['Exif']['34866'],
        exifVersion: original['Exif']['36864'],
        dateTimeOriginal: new Date(original['Exif']['36867']),
        createDate: new Date(original['Exif']['36868']),
        shutterSpeedValue: original['Exif']['37377'],
        apertureValue: original['Exif']['37378'],
        exposureCompensation: original['Exif']['37380'],
        maxApertureValue: original['Exif']['37381'],
        meteringMode: original['Exif']['37383'],
        lightSource: original['Exif']['37385'],
        focalLength: original['Exif']['37386'],
        subSecTimeOriginal: original['Exif']['37521'],
        subSecTimeDigitized: original['Exif']['57522'],
        focalPlaneXResolution: original['Exif']['41486'],
        focalPlaneYResolution: original['Exif']['41487'],
        focalPlaneResolutionUnit: original['Exif']['41488'],
        customRendered: original['Exif']['41985'],
        exposureMode: original['Exif']['41986'],
        whiteBalance: original['Exif']['41987'],
        sceneCaptureType: original['Exif']['41990'],
        serialNumber: original['Exif']['42033'],
        lensSpecification: original['Exif']['42034'],
        lensModel: original['Exif']['42036'],
        lensSerialNumber: original['Exif']['42037'],
    };
    // tslint:enable: no-string-literal
};
