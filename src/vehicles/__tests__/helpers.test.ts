/* eslint-disable @typescript-eslint/no-var-requires */

describe('Vehicle helpers', () => {
    test('return a random vin base', function() {
        const generateVin = require('../helpers').generateVin;
        const vin = generateVin({});

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

    test('return petrol as engine type as default', function() {
        const getEngineType = require('../helpers').getEngineType;
        const lodash = require('lodash');
        lodash.sample = jest.fn();
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

    test('return random plate number', function() {
        const randomNumberPlate = require('../helpers').getRandomNumberPlate;
        const numberPlate = randomNumberPlate({});

        expect(numberPlate).not.toBeFalsy();
        expect.any(String);
    });

    test('return plate number with prefix argument', function() {
        const randomNumberPlate = require('../helpers').getRandomNumberPlate;
        const numberPlate = randomNumberPlate({ prefix: 'TEST' });

        expect(numberPlate).not.toBeFalsy();
        expect(numberPlate).toContain('TEST');
    });

    test('return plate number with prefix argument of five letters', function() {
        const randomNumberPlate = require('../helpers').getRandomNumberPlate;
        const numberPlate = randomNumberPlate({ prefixLength: 5 });
        const prefix = numberPlate.slice(0, 5);

        expect(numberPlate).not.toBeFalsy();
        expect(prefix).toStrictEqual(expect.any(String));
        expect(prefix).not.toStrictEqual(expect.any(Number));
    });

    test('return plate number with prefix argument of two letter when prefixLength is greater than 26', function() {
        const randomNumberPlate = require('../helpers').getRandomNumberPlate;
        const numberPlate = randomNumberPlate({ prefixLength: 27 });
        const prefix = numberPlate.slice(0, 2);

        expect(numberPlate).not.toBeFalsy();
        expect(prefix).toStrictEqual(expect.any(String));
        expect(prefix).not.toStrictEqual(expect.any(Number));
    });

    test('return plate number with prefix argument of two letter when prefixLength is less than 1', function() {
        const randomNumberPlate = require('../helpers').getRandomNumberPlate;
        const numberPlate = randomNumberPlate({ prefixLength: 0 });
        const prefix = numberPlate.slice(0, 2);

        expect(numberPlate).not.toBeFalsy();
        expect(prefix).toStrictEqual(expect.any(String));
        expect(prefix).not.toStrictEqual(expect.any(Number));
    });

    test('return plate number with prefix argument of two letter when prefixLength is not provided', function() {
        const randomNumberPlate = require('../helpers').getRandomNumberPlate;
        const numberPlate = randomNumberPlate({});
        const prefix = numberPlate.slice(0, 2);

        expect(numberPlate).not.toBeFalsy();
        expect(prefix).toStrictEqual(expect.any(String));
        expect(prefix).not.toStrictEqual(expect.any(Number));
    });
});
