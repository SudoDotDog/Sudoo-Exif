/**
 * @author WMXPY
 * @namespace Exif_Declare
 * @description Enum
 */

export enum INTEROPERABILITY_INDEX {

    R98 = "R98",
    THM = "THM",
    R03 = "R03",
}

export enum ORIENTATION {

    TOP_LEFT = 1,
    ROP_RIGHT = 2,
    BOTTOM_RIGHT = 3,
    BOTTOM_LEFT = 4,
    LEFT_TOP = 5,
    RIGHT_TOP = 6,
    RIGHT_BOTTOM = 7,
    LEFT_BOTTOM = 8,
}

export enum RESOLUTION_UNIT {

    INCHES = 2,
    CENTIMETERS = 3,
}

export enum Y_CB_CR_POSITIONING {

    CENTERED = 1,
    CO_SITED = 2,
}

export enum COMPRESSION {

    UNCOMPRESSED = 1,
    JPEG_COMPRESSION = 6,
}

export enum GPS_LATITUDE_REF {

    NORTH = "N",
    SOUTH = "S",
}

export enum GPS_LONGITUDE_REF {

    EAST = "E",
    WEST = "W",
}

export enum GPS_ALTITUDE_REF {

    SEA_LEVEL = 0,
    SEA_LEVEL_REFERENCE = 1,
}

export enum EXPOSURE_PROGRAM {

    NOT_DEFINED = 0,
    MANUAL = 1,
    NORMAL_PROGRAM = 2,
    APERTURE_PRIORITY = 3,
    SHUTTER_PRIORITY = 4,
    CREATIVE_PROGRAM = 5,
    ACTION_PROGRAM = 6,
    PORTRAIT_MODE = 7,
    LANDSCAPE_MODE = 8,
}

export enum SENSITIVITY_TYPE {

    UNKNOWN = 0,
    STANDARD_OUTPUT_SENSITIVITY = 1,
    RECOMMENDED_EXPOSURE_INDEX = 2,
    ISO_SPEED = 3,
    STANDARD_OUTPUT_SENSITIVITY_AND_RECOMMENDED_EXPOSURE_INDEX = 4,
    STANDARD_OUTPUT_SENSITIVITY_AND_ISO_SPEED = 5,
    RECOMMENDED_EXPOSURE_INDEX_AND_ISO_SPEED = 5,
    STANDARD_OUTPUT_SENSITIVITY_ANd_RECOMMENDED_EXPOSURE_INDEX_AND_ISO_SPEED = 7,
}

export enum METERING_MODE {

    UNKNOWN = 0,
    AVERAGE = 1,
    CENTER_WEIGHTED_AVERAGE = 2,
    SPOT = 3,
    MULTI_SPOT = 4,
    PATTERN = 5,
    PARTIAL = 6,
    OTHER = 255,
}

export enum LIGHT_SOURCE {

    UNKNOWN = 0,
    DAYLIGHT = 1,
    FLUORESCENT = 2,
    TUNGSTEN = 3,
    FLASH = 4,
    FINE_WEATHER = 9,
    CLOUDY_WEATHER = 10,
    SHADE = 11,
    DAYLIGHT_FLUORESCENT = 12,
    DAY_WHITE_FLUORESCENT = 13,
    COOL_WHITE_FLUORESCENT = 14,
    WHITE_FLUORESCENT = 15,
    WARM_WHITE_FLUORESCENT = 16,
    STANDARD_LIGHT_A = 17,
    STANDARD_LIGHT_B = 18,
    STANDARD_LIGHT_C = 19,
    D55 = 20,
    D65 = 21,
    D75 = 22,
    D50 = 23,
    ISO_STUDIO_TUNGSTEN = 24,
    OTHER_LIGHT_SOURCE = 255,
}

export enum FLASH {

    FLASH_DID_NOT_FIRE = 0,
    FLASH_FIRED = 1,
}

export enum SENSING_METHOD {

    NOT_DEFINED = 1,
    ONE_CHIP_COLOR_AREA_SENSOR = 2,
    TWO_CHIP_COLOR_AREA_SENSOR = 3,
    THREE_CHIP_COLOR_AREA_SENSOR = 4,
    COLOR_SEQUENTIAL_AREA_SENSOR = 5,
    TRILINEAR_SENSOR = 7,
    COLOR_SEQUENTIAL_LINER_SENSOR = 8,
}

export enum COLOR_SPACE {

    S_RGB = 1,
}

export enum CUSTOM_RENDERED {

    NORMAL_PROCESS = 0,
    CUSTOM_PROCESS = 1,
}

export enum FILE_SOURCE {

    OTHERS = 0,
    SCANNER_OF_TRaNSPARENT_TYPE = 1,
    SCANNER_OF_REFLEX_TYPE = 2,
    DSC = 3,
}

export enum SCENE_TYPE {

    A_DIRECTLY_PHOTOGRAPHED_IMAGE = 1,
}

export enum EXPOSURE_MODE {

    AUTO_EXPOSURE = 0,
    MANUAL_EXPOSURE = 1,
    AUTO_BRACKET = 2,
}

export enum WHITE_BALANCE {

    AUTO_WHITE_BALANCE = 0,
    MANUAL_WHITE_BALANCE = 1,
}

export enum SCENE_CAPTURE_TYPE {

    STANDARD = 0,
    LANDSCAPE = 1,
    PORTRAIT = 2,
    NIGHT_SCENE = 3,
}

export enum GAIN_CONTROL {

    NONE = 0,
    LOW_GAIN_UP = 1,
    HIGH_GAIN_UP = 2,
    LOW_GAIN_DOWN = 3,
    HIGH_GAIN_DOWN = 4,
}

export enum CONTRAST {

    NORMAL = 0,
    SOFT = 1,
    HARD = 2,
}

export enum SATURATION {

    NORMAL = 0,
    LOW_SATURATION = 1,
    HIGH_SATURATION = 2,
}

export enum SHARPNESS {

    NORMAL = 0,
    SOFT = 1,
    HARD = 2,
}

export enum SUBJECT_DISTANCE_RANGE {

    UNKNOWN = 0,
    MACRO = 1,
    CLOSE_VIEW = 2,
    DISTANT_VIEW = 3,
}
