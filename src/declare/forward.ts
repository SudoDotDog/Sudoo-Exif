/* eslint-disable @typescript-eslint/dot-notation */
/**
 * @author WMXPY
 * @namespace Exif_Declare
 * @description Forward
 */

import { parseExifBuffer } from "../parse/buffer";
import { parseExifDate } from "../parse/date";
import { parseExifLocation } from "../parse/location";
import { parseExifRational } from "../parse/rational";
import { parseExifSRational } from "../parse/s-rational";
import { removeObjectUndefined } from "../util";
import { ExifData } from "./declare";

export const parseForwardData = (original: any): ExifData => {

    // tslint:disable: no-string-literal
    const data: ExifData = {
        thumbnail: parseExifBuffer(original.thumbnail),

        // Interoperability
        interoperabilityIndex: original['Interop']['1'],

        // Core
        imageDescription: original['0th']['270'],
        make: original['0th']['271'],
        model: original['0th']['272'],
        orientation: original['0th']['274'],
        xResolution: parseExifRational(original['0th']['282']),
        yResolution: parseExifRational(original['0th']['283']),
        resolutionUnit: original['0th']['296'],
        transferFunction: original['0th']['301'],
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
        gpsLocation: parseExifLocation({
            gpsLatitudeRef: original['GPS']['1'],
            gpsLatitude: original['GPS']['2'],
            gpsLongitudeRef: original['GPS']['3'],
            gpsLongitude: original['GPS']['4'],
        }),
        gpsAltitudeRef: original['GPS']['5'],
        gpsAltitude: original['GPS']['6'],

        // Exif
        exposureTime: parseExifRational(original['Exif']['33434']),
        fNumber: parseExifRational(original['Exif']['33437']),
        exposureProgram: original['Exif']['34850'],
        spectralSensitivity: original['Exif']['34852'],
        photographicSensitivity: original['Exif']['34855'],
        OECF: original['Exif']['34856'],
        sensitivityType: original['Exif']['34864'],
        standardOutputSensitivity: original['Exif']['34865'],
        recommendedExposureIndex: original['Exif']['34866'],
        exifVersion: original['Exif']['36864'],
        dateTimeOriginal: parseExifDate(original['Exif']['36867']),
        createDate: parseExifDate(original['Exif']['36868']),
        componentsConfiguration: original['Exif']['37121'],
        shutterSpeedValue: parseExifSRational(original['Exif']['37377']),
        apertureValue: parseExifRational(original['Exif']['37378']),
        brightnessValue: parseExifSRational(original['Exif']['37379']),
        exposureCompensation: parseExifSRational(original['Exif']['37380']),
        maxApertureValue: parseExifRational(original['Exif']['37381']),
        subjectDistance: parseExifRational(original['Exif']['37382']),
        meteringMode: original['Exif']['37383'],
        lightSource: original['Exif']['37384'],
        flash: original['Exif']['37385'],
        focalLength: parseExifRational(original['Exif']['37386']),
        markerNote: parseExifBuffer(original['Exif']['37500']),
        userComment: parseExifBuffer(original['Exif']['37510']),
        subSecTimeOriginal: original['Exif']['37521'],
        subSecTimeDigitized: original['Exif']['37522'],
        flashpixVersion: original['Exif']['40960'],
        colorSpace: original['Exif']['40961'],
        exifImageWidth: original['Exif']['40962'],
        exifImageHeight: original['Exif']['40963'],
        relatedSoundFile: original['Exif']['40964'],
        interoperabilityIFD: original['Exif']['40965'],
        spatialFrequencyResponse: original['Exif']['41484'],
        focalPlaneXResolution: parseExifRational(original['Exif']['41486']),
        focalPlaneYResolution: parseExifRational(original['Exif']['41487']),
        focalPlaneResolutionUnit: original['Exif']['41488'],
        exposureIndex: parseExifRational(original['Exif']['41493']),
        sensingMethod: original['Exif']['41495'],
        fileSource: original['Exif']['41728'],
        sceneType: original['Exif']['41729'],
        cfaPattern: original['Exif']['41730'],
        customRendered: original['Exif']['41985'],
        exposureMode: original['Exif']['41986'],
        whiteBalance: original['Exif']['41987'],
        digitalZoomRatio: parseExifRational(original['Exif']['41988']),
        focalLengthIn35mmFilm: original['Exif']['41989'],
        sceneCaptureType: original['Exif']['41990'],
        gainControl: original['Exif']['41991'],
        contrast: original['Exif']['41992'],
        saturation: original['Exif']['41993'],
        sharpness: original['Exif']['41994'],
        deviceSettingDescription: original['Exif']['41995'],
        subjectDistanceRange: original['Exif']['41996'],
        imageUniqueID: original['Exif']['42016'],
        cameraOwnerName: original['Exif']['42032'],
        serialNumber: original['Exif']['42033'],
        lensSpecification: original['Exif']['42034'],
        lensMake: original['Exif']['42035'],
        lensModel: original['Exif']['42036'],
        lensSerialNumber: original['Exif']['42037'],
    };
    // tslint:enable: no-string-literal

    return removeObjectUndefined(data);
};
