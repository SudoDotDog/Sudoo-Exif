/**
 * @author WMXPY
 * @namespace Exif_Declare
 * @description Reverse
 */

import { formatExifBuffer } from "../parse/buffer";
import { formatExifDate } from "../parse/date";
import { ExifLocationCombination, formatExifLocation } from "../parse/location";
import { ExifData } from "./declare";

export const parseForwardData = (data: ExifData): any => {

    const location: Partial<ExifLocationCombination> = data.gpsLocation
        ? formatExifLocation(data.gpsLocation)
        : {};

    return {
        thumbnail: formatExifBuffer(data.thumbnail),
        Interop: {
            '1': data.interoperabilityIndex,
        },
        '0th': {
            '270': data.imageDescription,
            '271': data.make,
            '272': data.model,
            '274': data.orientation,
            '282': data.xResolution,
            '283': data.yResolution,
            '296': data.resolutionUnit,
            '305': data.software,
            '306': data.modifyDate
                ? formatExifDate(data.modifyDate)
                : undefined,
            '531': data.yCbCrPositioning,
            '315': data.artist,
            '33432': data.copyright,
            '34665': data.exifTag,
            '34853': data.gpdIFD,
        },
        '1st': {
            '259': data.compression,
            '513': data.jpegInterchangeFormat,
            '514': data.jpegInterchangeFormatLength,
        },
        GPS: {
            '0': data.gpsVersionID,
            '1': location.gpsLatitudeRef,
            '2': location.gpsLatitude,
            '3': location.gpsLongitudeRef,
            '4': location.gpsLongitude,
            '5': data.gpsAltitudeRef,
            '6': data.gpsAltitude,
        },
        Exif: {
            '33434': data.exposureTime,
            '33437': data.fNumber,
            '34850': data.exposureProgram,
            '34855': data.iso,
            '34864': data.sensitivityType,
            '34866': data.recommendedExposureIndex,
            '36864': data.exifVersion,
            '36867': formatExifDate(data.dateTimeOriginal),
            '36868': formatExifDate(data.createDate),
            '37121': data.componentsConfiguration,
            '37377': data.shutterSpeedValue,
            '37378': data.apertureValue,
            '37380': data.exposureCompensation,
            '37381': data.maxApertureValue,
            '37383': data.meteringMode,
            '37385': data.lightSource,
            '37386': data.focalLength,
            '37500': formatExifBuffer(data.markerNote),
            '37510': formatExifBuffer(data.userComment),
            '37521': data.subSecTimeOriginal,
            '37522': data.subSecTimeDigitized,
            '40960': data.flashpixVersion,
            '40961': data.colorSpace,
            '40962': data.exifImageWidth,
            '40963': data.exifImageHeight,
            '40965': data.interoperabilityIFD,
            '41486': data.focalPlaneXResolution,
            '41487': data.focalPlaneYResolution,
            '41488': data.focalPlaneResolutionUnit,
            '41728': data.fileSource,
            '41729': data.sceneType,
            '41985': data.customRendered,
            '41986': data.exposureMode,
            '41987': data.whiteBalance,
            '41988': data.digitalZoomRatio,
            '41989': data.focalLengthIn35mmFilm,
            '41990': data.sceneCaptureType,
            '41991': data.gainControl,
            '41992': data.contrast,
            '41993': data.saturation,
            '41994': data.sharpness,
            '41996': data.subjectDistanceRange,
            '42033': data.serialNumber,
            '42034': data.lensSpecification,
            '42036': data.lensModel,
            '42037': data.lensSerialNumber,
        },
    };
};
