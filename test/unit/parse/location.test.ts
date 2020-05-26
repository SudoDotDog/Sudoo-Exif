/**
 * @author WMXPY
 * @namespace Exif_Parse
 * @description Location
 * @override Unit
 */

import { Coordinate } from '@sudoo/geometry';
import { expect } from 'chai';
import { GPS_LATITUDE_REF, GPS_LONGITUDE_REF } from '../../../src/declare/enum';
import { ExifLocation, parseExifLocation } from '../../../src/parse/location';

describe('Given [Location-Parse] Helper Functions', (): void => {

    it('should be able to parse location', (): void => {

        const gpsLatitudeRef: GPS_LATITUDE_REF = GPS_LATITUDE_REF.NORTH;
        // tslint:disable-next-line: no-magic-numbers
        const gpsLatitude: ExifLocation = [[43, 1], [28, 1], [149399999, 100000000]];
        const gpsLongitudeRef = GPS_LONGITUDE_REF.EAST;
        // tslint:disable-next-line: no-magic-numbers
        const gpsLongitude: ExifLocation = [[11, 1], [53, 1], [433799999, 100000000]];

        const parsed: Coordinate | null = parseExifLocation({
            gpsLatitude,
            gpsLatitudeRef,
            gpsLongitude,
            gpsLongitudeRef,
        });

        // tslint:disable-next-line: no-unused-expression
        expect(parsed).to.be.not.null;

        const assertParsed: Coordinate = parsed as Coordinate;

        // tslint:disable-next-line: no-magic-numbers
        expect(assertParsed.latitude).to.be.equal(43.4670817);
        // tslint:disable-next-line: no-magic-numbers
        expect(assertParsed.longitude).to.be.equal(11.8845383);
    });

    it('should be able to parse location', (): void => {

        const gpsLatitudeRef: GPS_LATITUDE_REF = GPS_LATITUDE_REF.NORTH;
        // tslint:disable-next-line: no-magic-numbers
        const gpsLatitude: ExifLocation = [[43, 1], [28, 1], [149399999, 100000000]];
        const gpsLongitudeRef = GPS_LONGITUDE_REF.EAST;
        // tslint:disable-next-line: no-magic-numbers
        const gpsLongitude: ExifLocation = [[11, 1], [53, 1], [433799999, 100000000]];

        const parsed: Coordinate | null = parseExifLocation({
            gpsLatitude,
            gpsLatitudeRef,
            gpsLongitude,
            gpsLongitudeRef,
        });

        // tslint:disable-next-line: no-unused-expression
        expect(parsed).to.be.not.null;

        const assertParsed: Coordinate = parsed as Coordinate;

        // tslint:disable-next-line: no-magic-numbers
        expect(assertParsed.latitude).to.be.equal(43.4670817);
        // tslint:disable-next-line: no-magic-numbers
        expect(assertParsed.longitude).to.be.equal(11.8845383);
    });
});
