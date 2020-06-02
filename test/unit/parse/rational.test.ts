/**
 * @author WMXPY
 * @namespace Exif_Parse
 * @description Rational
 * @override Unit
 */

import { expect } from 'chai';
import { formatExifRational } from '../../../src/parse/rational';

describe('Given [Rational-Parse] Helper Functions', (): void => {

    it('should be able to format rational', (): void => {

        const value: number = 10;

        const formatted: [number, number] | undefined = formatExifRational(value);

        expect(formatted).to.be.deep.equal([10, 1]);
    });

    it('should be able to format rational with digits', (): void => {

        const value: number = 10.05;

        const formatted: [number, number] | undefined = formatExifRational(value);

        // tslint:disable-next-line: no-magic-numbers
        expect(formatted).to.be.deep.equal([1005, 100]);
    });

    it('should be able to format rational with digits and limit', (): void => {

        const value: number = 12.051252;

        const formatted: [number, number] | undefined = formatExifRational(value, 5);

        // tslint:disable-next-line: no-magic-numbers
        expect(formatted).to.be.deep.equal([1205125, 100000]);
    });
});
