/* eslint-disable @typescript-eslint/no-var-requires */
describe('Person full Name', () => {
    jest.resetAllMocks();
    test('returns a random full name', function() {
        const getFullName = require('../').getFullName;
        const fullName = getFullName();

        expect(fullName).not.toBeFalsy();
    });

    test('returns a random female full name', function() {
        const getFullName = require('../').getFullName;
        const fullName = getFullName('female');
        const femaleNames = require('../seeds/firstNames').femaleName;
        const firstName = fullName.split(' ')[0];

        expect(femaleNames).toContain(firstName);
        expect.any(String);
    });

    test('returns a random male full name', function() {
        const getFullName = require('../').getFullName;
        const fullName = getFullName('male');
        const maleNames = require('../seeds/firstNames').maleName;
        const firstName = fullName.split(' ')[0];

        expect(maleNames).toContain(firstName);
    });
});

describe('Person complete data', () => {
    test('returns a person with complete date', function() {
        const getPerson = require('../').getPerson;
        const person = getPerson();

        expect(person).not.toBeFalsy();
        expect(person).toBeInstanceOf(Object);
        expect(person.firstName).toStrictEqual(expect.any(String));
        expect(person.lastName).toStrictEqual(expect.any(String));
        expect(person.fullName).toStrictEqual(expect.any(String));
        expect(person.email).toStrictEqual(expect.any(String));
    });

    test('returns a generic email when no data is provided', function() {
        const createEmail = require('../').createEmail;
        const email = createEmail();

        expect(email).toEqual('noNameProvided@test.com');
    });

    test('returns a generic email when no first name is provided', function() {
        const createEmail = require('../').createEmail;
        const email = createEmail('', 'theLastName');

        expect(email).toEqual('theLastName@test.com');
    });

    test('returns a generic email when no last name is provided', function() {
        const createEmail = require('../').createEmail;
        const email = createEmail('theFirstName');

        expect(email).toEqual('theFirstName@test.com');
    });

    test('returns the appropriate email when all data is provided', function() {
        const createEmail = require('../').createEmail;
        const email = createEmail('theFirstName', 'theLastName', '','theDomain.com');

        expect(email).toEqual('theFirstNametheLastName@theDomain.com');
    });

    test('returns the appropriate email when the domain is not provided', function() {
        const createEmail = require('../').createEmail;
        const email = createEmail('theFirstName', 'theLastName');

        expect(email).toEqual('theFirstNametheLastName@test.com');
    });
});

describe('Random emails', () => {
    test('returns a generic random email', function() {
        const createRandomEmail = require('../').createRandomEmail;
        const email = createRandomEmail();

        expect(email).toStrictEqual(expect.any(String));
    });

    test('returns array of one random email', function() {
        const getMultipleEmails = require('../').getMultipleEmails;
        const emails = getMultipleEmails();

        expect(emails).toBeInstanceOf(Array);
        expect(emails).toHaveLength(1);
    });

    test('returns array of one random email if a negative number is provided', function() {
        const getMultipleEmails = require('../').getMultipleEmails;
        const emails = getMultipleEmails(-1);

        expect(emails).toBeInstanceOf(Array);
        expect(emails).toHaveLength(1);
    });

    test('returns array of random emails if number is a string', function() {
        const getMultipleEmails = require('../').getMultipleEmails;
        const emails = getMultipleEmails('3');

        expect(emails).toBeInstanceOf(Array);
        expect(emails).toHaveLength(3);
    });

    test('returns array of random emails if number is a float', function() {
        const getMultipleEmails = require('../').getMultipleEmails;
        const emails = getMultipleEmails(3.098);

        expect(emails).toBeInstanceOf(Array);
        expect(emails).toHaveLength(3);
    });

    test('returns default of three emails when argument is not a number', function() {
        const getMultipleEmails = require('../').getMultipleEmails;
        const emails = getMultipleEmails('Not a number');

        expect(emails).toBeInstanceOf(Array);
        expect(emails).toHaveLength(3);
    });
});

describe('Random people', () => {
    test('returns array of one random person', function() {
        const getPeople = require('../').getPeople;
        const people = getPeople();

        expect(people).toBeInstanceOf(Array);
        expect(people).toHaveLength(1);
    });

    test('returns array of one random person if a negative number is provided', function() {
        const getPeople = require('../').getPeople;
        const people = getPeople(-1);

        expect(people).toBeInstanceOf(Array);
        expect(people).toHaveLength(1);
    });

    test('returns array of random people if number is a string', function() {
        const getPeople = require('../').getPeople;
        const people = getPeople('3');

        expect(people).toBeInstanceOf(Array);
        expect(people).toHaveLength(3);
    });

    test('returns array of random people if number is a float', function() {
        const getPeople = require('../').getPeople;
        const people = getPeople(3.098);

        expect(people).toBeInstanceOf(Array);
        expect(people).toHaveLength(3);
    });

    test('returns default of three people when argument is not a number', function() {
        const getPeople = require('../').getPeople;
        const people = getPeople('Not a number');

        expect(people).toBeInstanceOf(Array);
        expect(people).toHaveLength(3);
    });
});

describe('Person first and last name', () => {
    test('returns a random first name when no gender is provided', function() {
        const getFirstName = require('../').getFirstName;
        const randomFirstName = getFirstName();

        expect(randomFirstName).not.toBeFalsy();
        expect.any(String);
    });

    test('returns a random female first name when the female gender is provided', function() {
        const getFirstName = require('../').getFirstName;
        const femaleNames = require('../seeds/firstNames').femaleName;
        const randomFirstName = getFirstName('female');

        expect(randomFirstName).not.toBeFalsy();
        expect(femaleNames).toContain(randomFirstName);
    });

    test('returns a random male first name when the male gender is provided', function() {
        const getFirstName = require('../').getFirstName;
        const maleNames = require('../seeds/firstNames').maleName;
        const randomFirstName = getFirstName('male');

        expect(randomFirstName).not.toBeFalsy();
        expect(maleNames).toContain(randomFirstName);
    });

    test('returns a random male first name when a random gender is provided', function() {
        const getFirstName = require('../').getFirstName;
        const maleNames = require('../seeds/firstNames').maleName;
        const randomFirstName = getFirstName('random');

        expect(randomFirstName).not.toBeFalsy();
        expect(maleNames).toContain(randomFirstName);
    });

    test('returns a return a random last name', function() {
        const getLastName = require('../').getLastName;
        const randomLastName = getLastName();

        expect(randomLastName).not.toBeFalsy();
    });

    test('returns the tester default lastname', function() {
        const getLastName = require('../').getLastName;
        const lodash = require('lodash');
        lodash.sample = jest.fn();
        const defaultLastName = getLastName();

        expect(defaultLastName).toBe('tester');
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
        const number = safeguardNumber(-5);

        expect(number).toEqual(5);
    });

    test('returns floor value of a float argument', function() {
        const safeguardNumber = require('../').safeguardNumber;
        const number = safeguardNumber(7.6505);

        expect(number).toEqual(7);
    });
});
