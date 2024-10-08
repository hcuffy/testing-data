import { getValidGender, getBirthDateAndAge, getFullAddress } from '../helpers';

describe('Person helpers', () => {
    test('return male when it is provided', function() {
        const gender = getValidGender('male');

        expect(gender).toEqual('male');
    });
    test('return female when it is provided', function() {
        const gender = getValidGender('female');

        expect(gender).toEqual('female');
    });
    test('return lowercase if provided gender is upper', function() {
        const gender = getValidGender('FEMALE');

        expect(gender).toEqual('female');
    });

    test('return lowercase if provided gender is uppercase if provided', function() {
        const gender = getValidGender('FEMALE');

        expect(gender).toEqual('female');
    });

    test('return random gender nothing is provided', function() {
        const gender = getValidGender();

        expect(['male', 'female']).toContain(gender);
    });

    test('return a random birthday', function() {
        const { birthdate, age } = getBirthDateAndAge();

        expect(new Date(birthdate)).toEqual(expect.any(Date));
        expect(age).toStrictEqual(expect.any(Number));
    });

    test('return a random address when country is not provided', function() {
        const { street, country, zip, streetNumber } = getFullAddress();

        expect(street).toStrictEqual(expect.any(String));
        expect(country).toStrictEqual(expect.any(String));
        expect(streetNumber).toStrictEqual(expect.any(Number));
        expect(zip).toStrictEqual(expect.any(String));
    });

    test('return a random address with provided country', function() {
        const { street, country, zip, streetNumber } = getFullAddress('Germany');

        expect(street).toStrictEqual(expect.any(String));
        expect(streetNumber).toStrictEqual(expect.any(Number));
        expect(country).toEqual('Germany');
        expect(zip).toStrictEqual(expect.any(String));
    });
});
