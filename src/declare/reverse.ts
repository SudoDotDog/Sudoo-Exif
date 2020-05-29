/**
 * @author WMXPY
 * @namespace Exif_Declare
 * @description Reverse
 */

import { formatExifBuffer } from "../parse/buffer";
import { formatExifDate } from "../parse/date";
import { ExifLocationCombination, formatExifLocation } from "../parse/location";
import { formatExifNumeric } from "../parse/numeric";
import { removeObjectUndefined } from "../util";
import { ExifData } from "./declare";

export const reverseExifData = (data: ExifData): any => {

    const location: Partial<ExifLocationCombination> = data.gpsLocation
        ? formatExifLocation(data.gpsLocation)
        : {};

    return {
        thumbnail: data.thumbnail
            ? formatExifBuffer(data.thumbnail)
            : undefined,
        Interop: removeObjectUndefined({
            '1': data.interoperabilityIndex,
        }),
        '0th': removeObjectUndefined({
            '270': data.imageDescription,
            '271': data.make,
            '272': data.model,
            '274': data.orientation,
            '282': formatExifNumeric(data.xResolution),
            '283': formatExifNumeric(data.yResolution),
            '296': data.resolutionUnit,
            '301': data.transferFunction,
            '305': data.software,
            '306': data.modifyDate
                ? formatExifDate(data.modifyDate)
                : undefined,
            '531': data.yCbCrPositioning,
            '315': data.artist,
            '33432': data.copyright,
            '34665': data.exifTag,
            '34853': data.gpdIFD,
        }),
        '1st': removeObjectUndefined({
            '259': data.compression,
            '513': data.jpegInterchangeFormat,
            '514': data.jpegInterchangeFormatLength,
        }),
        GPS: removeObjectUndefined({
            '0': data.gpsVersionID,
            '1': location.gpsLatitudeRef,
            '2': location.gpsLatitude,
            '3': location.gpsLongitudeRef,
            '4': location.gpsLongitude,
            '5': data.gpsAltitudeRef,
            '6': data.gpsAltitude,
        }),
        Exif: removeObjectUndefined({
            '33434': formatExifNumeric(data.exposureTime),
            '33437': formatExifNumeric(data.fNumber),
            '34850': data.exposureProgram,
            '34852': data.spectralSensitivity,
            '34855': data.photographicSensitivity,
            '34856': data.OECF,
            '34864': data.sensitivityType,
            '34865': data.standardOutputSensitivity,
            '34866': data.recommendedExposureIndex,
            '36864': data.exifVersion,
            '36867': data.dateTimeOriginal
                ? formatExifDate(data.dateTimeOriginal)
                : undefined,
            '36868': data.createDate
                ? formatExifDate(data.createDate)
                : undefined,
            '37121': data.componentsConfiguration,
            '37377': formatExifNumeric(data.shutterSpeedValue),
            '37378': formatExifNumeric(data.apertureValue),
            '37380': formatExifNumeric(data.exposureCompensation),
            '37381': formatExifNumeric(data.maxApertureValue),
            '37382': formatExifNumeric(data.subjectDistance),
            '37383': data.meteringMode,
            '37384': data.lightSource,
            '37385': data.flash,
            '37386': formatExifNumeric(data.focalLength),
            '37500': data.markerNote
                ? formatExifBuffer(data.markerNote)
                : undefined,
            '37510': data.userComment
                ? formatExifBuffer(data.userComment)
                : undefined,
            '37521': data.subSecTimeOriginal,
            '37522': data.subSecTimeDigitized,
            '40960': data.flashpixVersion,
            '40961': data.colorSpace,
            '40962': data.exifImageWidth,
            '40963': data.exifImageHeight,
            '40964': data.relatedSoundFile,
            '40965': data.interoperabilityIFD,
            '41484': data.spatialFrequencyResponse,
            '41486': formatExifNumeric(data.focalPlaneXResolution),
            '41487': formatExifNumeric(data.focalPlaneYResolution),
            '41488': data.focalPlaneResolutionUnit,
            '41493': formatExifNumeric(data.exposureIndex),
            '41728': data.fileSource,
            '41729': data.sceneType,
            '41730': data.cfaPattern,
            '41985': data.customRendered,
            '41986': data.exposureMode,
            '41987': data.whiteBalance,
            '41988': formatExifNumeric(data.digitalZoomRatio),
            '41989': data.focalLengthIn35mmFilm,
            '41990': data.sceneCaptureType,
            '41991': data.gainControl,
            '41992': data.contrast,
            '41993': data.saturation,
            '41994': data.sharpness,
            '41995': data.deviceSettingDescription,
            '41996': data.subjectDistanceRange,
            '42016': data.imageUniqueID,
            '42032': data.cameraOwnerName,
            '42033': data.serialNumber,
            '42034': data.lensSpecification,
            '42035': data.lensMake,
            '42036': data.lensModel,
            '42037': data.lensSerialNumber,
        }),
    };
};
