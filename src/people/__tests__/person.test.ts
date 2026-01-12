import {
    createEmail,
    createRandomEmail,
    getFirstName,
    getFullName,
    getLastName,
    getMultipleEmails,
    getPeople, getPerson,
    safeguardNumber
} from '../';
import _ from 'lodash';

describe('Person full Name', () => {
    jest.resetAllMocks();
    test('returns a random full name', function() {
        const fullName = getFullName();

        expect(fullName).not.toBeFalsy();
    });

    test('returns a random female full name', function() {
        const fullName = getFullName('female');

        expect(fullName).not.toBeFalsy();
        expect.any(String);
    });

    test('returns a random male full name', function() {
        const fullName = getFullName('male');

        expect(fullName).not.toBeFalsy();
        expect.any(String);
    });
});

describe('Person complete data', () => {
    test('returns a person with complete date', function() {
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
        expect(person.streetNumber).toStrictEqual(expect.any(Number));
        expect(person.country).toStrictEqual(expect.any(String));
        expect(person.zip).toStrictEqual(expect.any(String));
        expect(person.landline).toStrictEqual(expect.any(String));
        expect(person.mobileNumber).toStrictEqual(expect.any(String));
        expect(person.phoneCountry).toStrictEqual(expect.any(String));
        expect(person.phoneCountryCode).toStrictEqual(expect.any(String));
    });
    test('person object returns all props', function() {
        const person = getPerson({});

        expect(_.size(person)).toEqual(17);
    });
    test('returns a generic email when no data is provided', function() {
        const email = createEmail({});

        expect(email).toStrictEqual(expect.any(String));
    });

    test('returns a generic email when no first name is provided', function() {
        const email = createEmail({ lastName: 'theLastName' });

        expect(email).toEqual('thelastname@test.com');
    });

    test('returns a generic email when no last name is provided', function() {
        const email = createEmail({ firstName: 'theFirstName' });

        expect(email).toEqual('thefirstname@test.com');
    });

    test('returns the appropriate email when all data is provided', function() {
        const email = createEmail({ firstName: 'theFirstName', lastName: 'theLastName', domain: 'theDomain.com' });

        expect(email).toEqual('thefirstnamethelastname@thedomain.com');
    });

    test('returns the appropriate email when the domain is not provided', function() {
        const email = createEmail({ firstName: 'theFirstName', lastName: 'theLastName' });

        expect(email).toEqual('thefirstnamethelastname@test.com');
    });
});

describe('Random emails', () => {
    test('returns a generic random email', function() {
        const email = createRandomEmail();

        expect(email).toStrictEqual(expect.any(String));
    });

    test('returns array of one random email', function() {
        const emails = getMultipleEmails();

        expect(emails).toBeInstanceOf(Array);
        expect(emails).toHaveLength(1);
    });
});

describe('Random people', () => {
    test('returns array of one random person', function() {
        const people = getPeople();

        expect(people).toBeInstanceOf(Array);
        expect(people).toHaveLength(1);
    });

    test('returns array of one random person if a negative number is provided', function() {
        const people = getPeople({ quantity: - 1 });

        expect(people).toBeInstanceOf(Array);
        expect(people).toHaveLength(1);
    });

    test('returns array of random people if number is a float', function() {
        const people = getPeople({ quantity: 3.098 });

        expect(people).toBeInstanceOf(Array);
        expect(people).toHaveLength(3);
    });

    test('returns 50 people when quantity is 50', function() {
        const people = getPeople({ quantity: 50 });

        expect(people).toBeInstanceOf(Array);
        expect(people).toHaveLength(50);
    });

    test('returns 1 persons when quantity is 2 but the email already exists', function() {
        _.some = jest.fn().mockReturnValue(false)
            .mockReturnValueOnce(true);
        const people = getPeople({ quantity: 2 });

        expect(people).toBeInstanceOf(Array);
        expect(people).toHaveLength(1);
    });
});

describe('Person first and last name', () => {
    test('returns a random first name when no gender is provided', function() {
        const randomFirstName = getFirstName();

        expect(randomFirstName).not.toBeFalsy();
        expect.any(String);
    });

    test('returns a random female first name when the female gender is provided', function() {
        const randomFirstName = getFirstName('female');

        expect(randomFirstName).not.toBeFalsy();
        expect.any(String);
    });

    test('returns a random male first name when the male gender is provided', function() {
        const randomFirstName = getFirstName('male');

        expect(randomFirstName).not.toBeFalsy();
        expect(randomFirstName).toStrictEqual(expect.any(String));
    });

    test('returns a return a random last name', function() {
        const randomLastName = getLastName();

        expect(randomLastName).not.toBeFalsy();
    });
});

describe('Number Safeguard', () => {
    test('returns 50 is the argument is greater than 50', function() {
        const number = safeguardNumber(51);

        expect(number).toEqual(50);
    });

    test('returns 3 if no number is provided', function() {
        const number = safeguardNumber();

        expect(number).toEqual(3);
    });

    test('returns the absolute value of a negative argument', function() {
        const number = safeguardNumber(- 5);

        expect(number).toEqual(5);
    });

    test('returns floor value of a float argument', function() {
        const number = safeguardNumber(7.6505);

        expect(number).toEqual(7);
    });
});
