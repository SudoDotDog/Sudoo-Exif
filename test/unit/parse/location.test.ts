/**
 * @author WMXPY
 * @namespace Exif_Parse
 * @description Location
 * @override Unit
 */

import { Coordinate } from '@sudoo/geometry';
import { expect } from 'chai';
import { GPS_LATITUDE_REF, GPS_LONGITUDE_REF } from '../../../src/declare/enum';
import { ExifLocation, ExifLocationCombination, formatExifLocation, parseExifLocation } from '../../../src/parse/location';

describe('Given [Location-Parse] Helper Functions', (): void => {

    it('should be able to format location', (): void => {

        const coordinate: Coordinate = {
            latitude: 43.46708167,
            longitude: 11.88453833,
        };

        const formatted: ExifLocationCombination = formatExifLocation(coordinate);

        const gpsLatitudeRef: GPS_LATITUDE_REF = GPS_LATITUDE_REF.NORTH;
        // tslint:disable-next-line: no-magic-numbers
        const gpsLatitude: ExifLocation = [[43, 1], [28, 1], [14940120, 10000000]];
        const gpsLongitudeRef = GPS_LONGITUDE_REF.EAST;
        // tslint:disable-next-line: no-magic-numbers
        const gpsLongitude: ExifLocation = [[11, 1], [53, 1], [43379880, 10000000]];

        expect(formatted).to.be.deep.equal({
            gpsLatitude,
            gpsLatitudeRef,
            gpsLongitude,
            gpsLongitudeRef,
        });
    });

    it('should be able to format location without limit', (): void => {

        const coordinate: Coordinate = {
            latitude: 43.46708167,
            longitude: 11.88453833,
        };

        const formatted: ExifLocationCombination = formatExifLocation(coordinate, 8);

        const gpsLatitudeRef: GPS_LATITUDE_REF = GPS_LATITUDE_REF.NORTH;
        // tslint:disable-next-line: no-magic-numbers
        const gpsLatitude: ExifLocation = [[43, 1], [28, 1], [149401200, 100000000]];
        const gpsLongitudeRef = GPS_LONGITUDE_REF.EAST;
        // tslint:disable-next-line: no-magic-numbers
        const gpsLongitude: ExifLocation = [[11, 1], [53, 1], [433798800, 100000000]];

        expect(formatted).to.be.deep.equal({
            gpsLatitude,
            gpsLatitudeRef,
            gpsLongitude,
            gpsLongitudeRef,
        });
    });

    it('should be able to format location with limit', (): void => {

        const coordinate: Coordinate = {
            latitude: 43.46708167,
            longitude: 11.88453833,
        };

        const formatted: ExifLocationCombination = formatExifLocation(coordinate, 3);

        const gpsLatitudeRef: GPS_LATITUDE_REF = GPS_LATITUDE_REF.NORTH;
        // tslint:disable-next-line: no-magic-numbers
        const gpsLatitude: ExifLocation = [[43, 1], [28, 1], [1494, 1000]];
        const gpsLongitudeRef = GPS_LONGITUDE_REF.EAST;
        // tslint:disable-next-line: no-magic-numbers
        const gpsLongitude: ExifLocation = [[11, 1], [53, 1], [4338, 1000]];

        expect(formatted).to.be.deep.equal({
            gpsLatitude,
            gpsLatitudeRef,
            gpsLongitude,
            gpsLongitudeRef,
        });
    });

    it('should be able to format negative latitude location', (): void => {

        const coordinate: Coordinate = {
            latitude: -43.46708167,
            longitude: 11.88453833,
        };

        const formatted: ExifLocationCombination = formatExifLocation(coordinate);

        const gpsLatitudeRef: GPS_LATITUDE_REF = GPS_LATITUDE_REF.SOUTH;
        // tslint:disable-next-line: no-magic-numbers
        const gpsLatitude: ExifLocation = [[43, 1], [28, 1], [14940120, 10000000]];
        const gpsLongitudeRef = GPS_LONGITUDE_REF.EAST;
        // tslint:disable-next-line: no-magic-numbers
        const gpsLongitude: ExifLocation = [[11, 1], [53, 1], [43379880, 10000000]];

        expect(formatted).to.be.deep.equal({
            gpsLatitude,
            gpsLatitudeRef,
            gpsLongitude,
            gpsLongitudeRef,
        });
    });

    it('should be able to format negative longitude location', (): void => {

        const coordinate: Coordinate = {
            latitude: 43.46708167,
            longitude: -11.88453833,
        };

        const formatted: ExifLocationCombination = formatExifLocation(coordinate);

        const gpsLatitudeRef: GPS_LATITUDE_REF = GPS_LATITUDE_REF.NORTH;
        // tslint:disable-next-line: no-magic-numbers
        const gpsLatitude: ExifLocation = [[43, 1], [28, 1], [14940120, 10000000]];
        const gpsLongitudeRef = GPS_LONGITUDE_REF.WEST;
        // tslint:disable-next-line: no-magic-numbers
        const gpsLongitude: ExifLocation = [[11, 1], [53, 1], [43379880, 10000000]];

        expect(formatted).to.be.deep.equal({
            gpsLatitude,
            gpsLatitudeRef,
            gpsLongitude,
            gpsLongitudeRef,
        });
    });

    it('should be able to format negative both location', (): void => {

        const coordinate: Coordinate = {
            latitude: -43.46708167,
            longitude: -11.88453833,
        };

        const formatted: ExifLocationCombination = formatExifLocation(coordinate);

        const gpsLatitudeRef: GPS_LATITUDE_REF = GPS_LATITUDE_REF.SOUTH;
        // tslint:disable-next-line: no-magic-numbers
        const gpsLatitude: ExifLocation = [[43, 1], [28, 1], [14940120, 10000000]];
        const gpsLongitudeRef = GPS_LONGITUDE_REF.WEST;
        // tslint:disable-next-line: no-magic-numbers
        const gpsLongitude: ExifLocation = [[11, 1], [53, 1], [43379880, 10000000]];

        expect(formatted).to.be.deep.equal({
            gpsLatitude,
            gpsLatitudeRef,
            gpsLongitude,
            gpsLongitudeRef,
        });
    });

    it('should be able to parse location', (): void => {

        const gpsLatitudeRef: GPS_LATITUDE_REF = GPS_LATITUDE_REF.NORTH;
        // tslint:disable-next-line: no-magic-numbers
        const gpsLatitude: ExifLocation = [[43, 1], [28, 1], [149399999, 100000000]];
        const gpsLongitudeRef = GPS_LONGITUDE_REF.EAST;
        // tslint:disable-next-line: no-magic-numbers
        const gpsLongitude: ExifLocation = [[11, 1], [53, 1], [433799999, 100000000]];

        const parsed: Coordinate | undefined = parseExifLocation({
            gpsLatitude,
            gpsLatitudeRef,
            gpsLongitude,
            gpsLongitudeRef,
        });

        // tslint:disable-next-line: no-unused-expression
        expect(parsed).to.be.not.undefined;

        const assertParsed: Coordinate = parsed as Coordinate;

        // tslint:disable-next-line: no-magic-numbers
        expect(assertParsed.latitude).to.be.equal(43.46708167);
        // tslint:disable-next-line: no-magic-numbers
        expect(assertParsed.longitude).to.be.equal(11.88453833);
    });

    it('should be able to parse negative latitude location', (): void => {

        const gpsLatitudeRef: GPS_LATITUDE_REF = GPS_LATITUDE_REF.SOUTH;
        // tslint:disable-next-line: no-magic-numbers
        const gpsLatitude: ExifLocation = [[43, 1], [28, 1], [149399999, 100000000]];
        const gpsLongitudeRef = GPS_LONGITUDE_REF.EAST;
        // tslint:disable-next-line: no-magic-numbers
        const gpsLongitude: ExifLocation = [[11, 1], [53, 1], [433799999, 100000000]];

        const parsed: Coordinate | undefined = parseExifLocation({
            gpsLatitude,
            gpsLatitudeRef,
            gpsLongitude,
            gpsLongitudeRef,
        });

        // tslint:disable-next-line: no-unused-expression
        expect(parsed).to.be.not.undefined;

        const assertParsed: Coordinate = parsed as Coordinate;

        // tslint:disable-next-line: no-magic-numbers
        expect(assertParsed.latitude).to.be.equal(-43.46708167);
        // tslint:disable-next-line: no-magic-numbers
        expect(assertParsed.longitude).to.be.equal(11.88453833);
    });

    it('should be able to parse negative longitude location', (): void => {

        const gpsLatitudeRef: GPS_LATITUDE_REF = GPS_LATITUDE_REF.NORTH;
        // tslint:disable-next-line: no-magic-numbers
        const gpsLatitude: ExifLocation = [[43, 1], [28, 1], [149399999, 100000000]];
        const gpsLongitudeRef = GPS_LONGITUDE_REF.WEST;
        // tslint:disable-next-line: no-magic-numbers
        const gpsLongitude: ExifLocation = [[11, 1], [53, 1], [433799999, 100000000]];

        const parsed: Coordinate | undefined = parseExifLocation({
            gpsLatitude,
            gpsLatitudeRef,
            gpsLongitude,
            gpsLongitudeRef,
        });

        // tslint:disable-next-line: no-unused-expression
        expect(parsed).to.be.not.undefined;

        const assertParsed: Coordinate = parsed as Coordinate;

        // tslint:disable-next-line: no-magic-numbers
        expect(assertParsed.latitude).to.be.equal(43.46708167);
        // tslint:disable-next-line: no-magic-numbers
        expect(assertParsed.longitude).to.be.equal(-11.88453833);
    });

    it('should be able to parse negative both location', (): void => {

        const gpsLatitudeRef: GPS_LATITUDE_REF = GPS_LATITUDE_REF.SOUTH;
        // tslint:disable-next-line: no-magic-numbers
        const gpsLatitude: ExifLocation = [[43, 1], [28, 1], [149399999, 100000000]];
        const gpsLongitudeRef = GPS_LONGITUDE_REF.WEST;
        // tslint:disable-next-line: no-magic-numbers
        const gpsLongitude: ExifLocation = [[11, 1], [53, 1], [433799999, 100000000]];

        const parsed: Coordinate | undefined = parseExifLocation({
            gpsLatitude,
            gpsLatitudeRef,
            gpsLongitude,
            gpsLongitudeRef,
        });

        // tslint:disable-next-line: no-unused-expression
        expect(parsed).to.be.not.undefined;

        const assertParsed: Coordinate = parsed as Coordinate;

        // tslint:disable-next-line: no-magic-numbers
        expect(assertParsed.latitude).to.be.equal(-43.46708167);
        // tslint:disable-next-line: no-magic-numbers
        expect(assertParsed.longitude).to.be.equal(-11.88453833);
    });
});
