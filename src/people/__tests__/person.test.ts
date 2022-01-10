/* eslint-disable @typescript-eslint/no-var-requires */

describe('Person full Name', () => {
    jest.resetAllMocks();
    test('returns a random full name', function() {
        const getFullName = require('../').getFullName;
        const fullName = getFullName({});

        expect(fullName).not.toBeFalsy();
    });

    test('returns a random female full name', function() {
        const getFullName = require('../').getFullName;
        const fullName = getFullName({ gender: 'female' });

        expect(fullName).not.toBeFalsy();
        expect.any(String);
    });

    test('returns a random male full name', function() {
        const getFullName = require('../').getFullName;
        const fullName = getFullName({ gender: 'male' });

        expect(fullName).not.toBeFalsy();
        expect.any(String);
    });
});

describe('Person complete data', () => {
    test('returns a person with complete date', function() {
        const getPerson = require('../').getPerson;
        const person = getPerson({});

        expect(person).not.toBeFalsy();
        expect(person).toBeInstanceOf(Object);
        expect(person.firstName).toStrictEqual(expect.any(String));
        expect(person.lastName).toStrictEqual(expect.any(String));
        expect(person.fullName).toStrictEqual(expect.any(String));
        expect(person.email).toStrictEqual(expect.any(String));
        expect(person.gender).toStrictEqual(expect.any(String));
        expect(person.birthdate).toStrictEqual(expect.any(String));
        expect(person.age).toStrictEqual(expect.any(Number));
        expect(person.street).toStrictEqual(expect.any(String));
        expect(person.country).toStrictEqual(expect.any(String));
        expect(person.zip).toStrictEqual(expect.any(String));
    });
    test('person object returns five props', function() {
        const getPerson = require('../').getPerson;
        const lodash = require('lodash');

        const person = getPerson({});
        const objectSize = lodash.size(person);

        expect(objectSize).toEqual(10);
    });
    test('returns a generic email when no data is provided', function() {
        const createEmail = require('../').createEmail;
        const email = createEmail({});

        expect(email).toStrictEqual(expect.any(String));
    });

    test('returns a generic email when no first name is provided', function() {
        const createEmail = require('../').createEmail;
        const email = createEmail({ lastName: 'theLastName' });

        expect(email).toEqual('thelastname@test.com');
    });

    test('returns a generic email when no last name is provided', function() {
        const createEmail = require('../').createEmail;
        const email = createEmail({ firstName: 'theFirstName' });

        expect(email).toEqual('thefirstname@test.com');
    });

    test('returns the appropriate email when all data is provided', function() {
        const createEmail = require('../').createEmail;
        const email = createEmail({ firstName: 'theFirstName', lastName: 'theLastName', domain: 'theDomain.com' });

        expect(email).toEqual('thefirstnamethelastname@thedomain.com');
    });

    test('returns the appropriate email when the domain is not provided', function() {
        const createEmail = require('../').createEmail;
        const email = createEmail({ firstName: 'theFirstName', lastName: 'theLastName' });

        expect(email).toEqual('thefirstnamethelastname@test.com');
    });
});

describe('Random emails', () => {
    test('returns a generic random email', function() {
        const createRandomEmail = require('../').createRandomEmail;
        const email = createRandomEmail({});

        expect(email).toStrictEqual(expect.any(String));
    });

    test('returns array of one random email', function() {
        const getMultipleEmails = require('../').getMultipleEmails;
        const emails = getMultipleEmails({});

        expect(emails).toBeInstanceOf(Array);
        expect(emails).toHaveLength(1);
    });

    test('returns array of one random email if a negative number is provided', function() {
        const getMultipleEmails = require('../').getMultipleEmails;
        const emails = getMultipleEmails({ quantity: - 1 });

        expect(emails).toBeInstanceOf(Array);
        expect(emails).toHaveLength(1);
    });

    test('returns array of random emails if number is a string', function() {
        const getMultipleEmails = require('../').getMultipleEmails;
        const emails = getMultipleEmails({ quantity: '3' });

        expect(emails).toBeInstanceOf(Array);
        expect(emails).toHaveLength(3);
    });

    test('returns array of random emails if number is a float', function() {
        const getMultipleEmails = require('../').getMultipleEmails;
        const emails = getMultipleEmails({ quantity: 3.098 });

        expect(emails).toBeInstanceOf(Array);
        expect(emails).toHaveLength(3);
    });

    test('returns default of three emails when argument is not a number', function() {
        const getMultipleEmails = require('../').getMultipleEmails;
        const emails = getMultipleEmails({ quantity: 'Not a number' });

        expect(emails).toBeInstanceOf(Array);
        expect(emails).toHaveLength(3);
    });
});

describe('Random people', () => {
    test('returns array of one random person', function() {
        const getPeople = require('../').getPeople;
        const people = getPeople({});

        expect(people).toBeInstanceOf(Array);
        expect(people).toHaveLength(1);
    });

    test('returns array of one random person if a negative number is provided', function() {
        const getPeople = require('../').getPeople;
        const people = getPeople({ quantity: - 1 });

        expect(people).toBeInstanceOf(Array);
        expect(people).toHaveLength(1);
    });

    test('returns array of random people if number is a string', function() {
        const getPeople = require('../').getPeople;
        const people = getPeople({ quantity: '3' });

        expect(people).toBeInstanceOf(Array);
        expect(people).toHaveLength(3);
    });

    test('returns array of random people if number is a float', function() {
        const getPeople = require('../').getPeople;
        const people = getPeople({ quantity: 3.098 });

        expect(people).toBeInstanceOf(Array);
        expect(people).toHaveLength(3);
    });

    test('returns default of three people when argument is not a number', function() {
        const getPeople = require('../').getPeople;
        const people = getPeople({ quantity: 'Not a number' });

        expect(people).toBeInstanceOf(Array);
        expect(people).toHaveLength(3);
    });

    test('returns 50 people when quantity is 50', function() {
        const getPeople = require('../').getPeople;
        const people = getPeople({ quantity: 50 });

        expect(people).toBeInstanceOf(Array);
        expect(people).toHaveLength(50);
    });

    test('returns 1 persons when quantity is 2 but the email already exists', function() {
        const getPeople = require('../').getPeople;
        const lodash = require('lodash');
        lodash.some = jest.fn().mockReturnValue(false)
            .mockReturnValueOnce(true);
        const people = getPeople({ quantity: 2 });

        expect(people).toBeInstanceOf(Array);
        expect(people).toHaveLength(1);
    });
});

describe('Person first and last name', () => {
    test('returns a random first name when no gender is provided', function() {
        const getFirstName = require('../').getFirstName;
        const randomFirstName = getFirstName({});

        expect(randomFirstName).not.toBeFalsy();
        expect.any(String);
    });

    test('returns a random female first name when the female gender is provided', function() {
        const getFirstName = require('../').getFirstName;
        const randomFirstName = getFirstName({ gender: 'female' });

        expect(randomFirstName).not.toBeFalsy();
        expect.any(String);
    });

    test('returns a random male first name when the male gender is provided', function() {
        const getFirstName = require('../').getFirstName;
        const randomFirstName = getFirstName({ gender: 'male' });

        expect(randomFirstName).not.toBeFalsy();
        expect(randomFirstName).toStrictEqual(expect.any(String));
    });

    test('returns a return a random last name', function() {
        const getLastName = require('../').getLastName;
        const randomLastName = getLastName({});

        expect(randomLastName).not.toBeFalsy();
    });
});

describe('Number Safeguard', () => {
    test('returns 50 is the argument is greater than 50', function() {
        const safeguardNumber = require('../').safeguardNumber;
        const number = safeguardNumber(51);

        expect(number).toEqual(50);
    });

    test('returns 3 if no number is provided', function() {
        const safeguardNumber = require('../').safeguardNumber;
        const number = safeguardNumber();

        expect(number).toEqual(3);
    });

    test('returns the absolute value of a negative argument', function() {
        const safeguardNumber = require('../').safeguardNumber;
        const number = safeguardNumber(- 5);

        expect(number).toEqual(5);
    });

    test('returns floor value of a float argument', function() {
        const safeguardNumber = require('../').safeguardNumber;
        const number = safeguardNumber(7.6505);

        expect(number).toEqual(7);
    });
});
