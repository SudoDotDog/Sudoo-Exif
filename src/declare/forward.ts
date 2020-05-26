/**
 * @author WMXPY
 * @namespace Exif_Declare
 * @description Forward
 */

import { parseExifBuffer } from "../parse/buffer";
import { parseExifDate } from "../parse/date";
import { ExifData } from "./declare";

export const parseForwardData = (original: any): ExifData => {

    // tslint:disable: no-string-literal
    return {
        thumbnail: parseExifBuffer(original.thumbnail),

        // Interoperability
        interoperabilityIndex: original['Interop']['1'],

        // Core
        imageDescription: original['0th']['270'],
        make: original['0th']['271'],
        model: original['0th']['272'],
        orientation: original['0th']['274'],
        xResolution: original['0th']['282'],
        yResolution: original['0th']['283'],
        resolutionUnit: original['0th']['296'],
        software: original['0th']['305'],
        modifyDate: parseExifDate(original['0th']['306']),
        yCbCrPositioning: original['0th']['531'],
        artist: original['0th']['315'],
        copyright: original['0th']['33432'],
        exifTag: original['0th']['34665'],
        gpdIFD: original['0th']['34853'],

        compression: original['1st']['259'],
        jpegInterchangeFormat: original['1st']['513'],
        jpegInterchangeFormatLength: original['1st']['514'],

        // GPS
        gpsVersionID: original['GPS']['0'],
        gpsLatitudeRef: original['GPS']['1'],
        gpsLatitude: original['GPS']['2'],
        gpsLongitudeRef: original['GPS']['3'],
        gpsLongitude: original['GPS']['4'],
        gpsAltitudeRef: original['GPS']['5'],
        gpsAltitude: original['GPS']['6'],

        // Exif
        exposureTime: original['Exif']['33434'],
        fNumber: original['Exif']['33437'],
        exposureProgram: original['Exif']['34850'],
        iso: original['Exif']['34855'],
        sensitivityType: original['Exif']['34864'],
        recommendedExposureIndex: original['Exif']['34866'],
        exifVersion: original['Exif']['36864'],
        dateTimeOriginal: parseExifDate(original['Exif']['36867']),
        createDate: parseExifDate(original['Exif']['36868']),
        componentsConfiguration: original['Exif']['37121'],
        shutterSpeedValue: original['Exif']['37377'],
        apertureValue: original['Exif']['37378'],
        exposureCompensation: original['Exif']['37380'],
        maxApertureValue: original['Exif']['37381'],
        meteringMode: original['Exif']['37383'],
        lightSource: original['Exif']['37385'],
        focalLength: original['Exif']['37386'],
        markerNote: parseExifBuffer(original['Exif']['37500']),
        userComment: parseExifBuffer(original['Exif']['37510']),
        subSecTimeOriginal: original['Exif']['37521'],
        subSecTimeDigitized: original['Exif']['37522'],
        flashpixVersion: original['Exif']['40960'],
        colorSpace: original['Exif']['40961'],
        exifImageWidth: original['Exif']['40962'],
        exifImageHeight: original['Exif']['40963'],
        interoperabilityIFD: original['Exif']['40965'],
        focalPlaneXResolution: original['Exif']['41486'],
        focalPlaneYResolution: original['Exif']['41487'],
        focalPlaneResolutionUnit: original['Exif']['41488'],
        fileSource: original['Exif']['41728'],
        sceneType: original['Exif']['41729'],
        customRendered: original['Exif']['41985'],
        exposureMode: original['Exif']['41986'],
        whiteBalance: original['Exif']['41987'],
        digitalZoomRatio: original['Exif']['41988'],
        focalLengthIn35mmFilm: original['Exif']['41989'],
        sceneCaptureType: original['Exif']['41990'],
        gainControl: original['Exif']['41991'],
        contrast: original['Exif']['41992'],
        saturation: original['Exif']['41993'],
        sharpness: original['Exif']['41994'],
        subjectDistanceRange: original['Exif']['41996'],
        serialNumber: original['Exif']['42033'],
        lensSpecification: original['Exif']['42034'],
        lensModel: original['Exif']['42036'],
        lensSerialNumber: original['Exif']['42037'],
    };
    // tslint:enable: no-string-literal
};
