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

        const formatted: [number, number] = formatExifRational(value);

        expect(formatted).to.be.deep.equal([10, 1]);
    });
});
