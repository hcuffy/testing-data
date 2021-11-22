/* eslint-disable @typescript-eslint/no-var-requires */

describe('Person helpers', () => {
    test('return male when it is provided', function() {
        const getGender = require('../helpers').getGender;
        const gender = getGender('male');

        expect(gender).toEqual('male');
    });
    test('return female when it is provided', function() {
        const getGender = require('../helpers').getGender;
        const gender = getGender('female');

        expect(gender).toEqual('female');
    });
    test('return lowercase if provided gender is upper', function() {
        const getGender = require('../helpers').getGender;
        const gender = getGender('FEMALE');

        expect(gender).toEqual('female');
    });

    test('return lowercase if provided gender is uppercase if provided', function() {
        const getGender = require('../helpers').getGender;
        const gender = getGender('FEMALE');

        expect(gender).toEqual('female');
    });

    test('return random gender nothing is provided', function() {
        const getGender = require('../helpers').getGender;
        const gender = getGender({});

        expect(['male', 'female']).toContain(gender);
    });

    test('return a random birthday', function() {
        const getBirthday = require('../helpers').getBirthDateAndAge;
        const { birthdate, age } = getBirthday();

        expect(new Date(birthdate)).toEqual(expect.any(Date));
        expect(age).toEqual(expect.any(Number));
    });
});
