/* eslint-disable @typescript-eslint/no-var-requires */

import {
    getRandomNumberPlate as randomNumberPlate,
    getRandomNumberPlate,
    randomNumber,
    randomPlatePrefix
} from '../helpers';

describe('Vehicle helpers', () => {
    test('return a random vin base', function() {
        const generateVin = require('../helpers').generateVin;
        const vin = generateVin();

        expect(vin).not.toBeFalsy();
        expect.any(String);
        expect(vin.length).toEqual(6);
    });

    test('return a random engine type', function() {
        const getEngineType = require('../helpers').getEngineType;
        const engineType = getEngineType();

        expect(engineType).not.toBeFalsy();
        expect.any(String);
    });

    test('return a random brand', function() {
        const getRandomBrand = require('../helpers').getRandomBrand;
        const brand = getRandomBrand();

        expect(brand).not.toBeFalsy();
        expect.any(String);
    });

    test('return a random number', function() {
        const randomNumber = require('../helpers').randomNumber;
        const number = randomNumber();

        expect(number).not.toBeFalsy();
        expect.any(Number);
    });

    test('return two letters', function() {
        const randomPlatePrefix = require('../helpers').randomPlatePrefix;
        const platePrefix = randomPlatePrefix();

        expect(platePrefix).not.toBeFalsy();
        expect(platePrefix.length).toEqual(2);
    });

    test('return five letters', function() {
        const numberOfLetters = 5;
        const randomPlatePrefix = require('../helpers').randomPlatePrefix;
        const platePrefix = randomPlatePrefix(numberOfLetters);

        expect(platePrefix).not.toBeFalsy();
        expect(platePrefix.length).toEqual(numberOfLetters);
    });

    test('return two letters if argument is greater the 26', function() {
        const randomPlatePrefix = require('../helpers').randomPlatePrefix;
        const platePrefix = randomPlatePrefix(30);

        expect(platePrefix).not.toBeFalsy();
        expect(platePrefix.length).toEqual(2);
    });

    test('return two letters if argument is less 1', function() {
        const randomPlatePrefix = require('../helpers').randomPlatePrefix;
        const platePrefix = randomPlatePrefix(-30);

        expect(platePrefix).not.toBeFalsy();
        expect(platePrefix.length).toEqual(2);
    });

    test('return random plate number', function() {
        const randomNumberPlate = require('../helpers').getRandomNumberPlate;
        const numberPlate = randomNumberPlate();

        expect(numberPlate).not.toBeFalsy();
        expect.any(String);
    });

    test('return plate number with prefix argument', function() {
        const randomNumberPlate = require('../helpers').getRandomNumberPlate;
        const numberPlate = randomNumberPlate('TEST');

        expect(numberPlate).not.toBeFalsy();
        expect(numberPlate).toContain('TEST');
    });

    test('return plate number with prefix argument and ', function() {
        const randomNumberPlate = require('../helpers').getRandomNumberPlate;
        const numberPlate = randomNumberPlate('', 5);

        expect(numberPlate).not.toBeFalsy();
        expect.any(String);
    });

});
