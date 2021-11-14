/* eslint-disable @typescript-eslint/no-var-requires */

describe('Person helpers', () => {
    test('return a random birthday', function() {
        const getBirthday = require('../helpers').getBirthDateAndAge;
        const { birthdate, age } = getBirthday();

        expect(new Date(birthdate)).toEqual(expect.any(Date));
        expect(age).toEqual(expect.any(Number));
    });
});
