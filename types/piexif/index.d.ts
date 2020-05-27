/**
 * @author WMXPY
 * @namespace Types
 * @description PiExif
 */

declare module 'piexifjs' {

    function load(data: string): any;
    function dump(data: any): any;
    function insert(data: any, image: string): string;
}
