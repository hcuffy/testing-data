import _ from 'lodash';
import { femaleName, maleName, lastNames } from './seeds';

export function getFirstName(gender = '') : string {
    let randomFirstName;

    if (gender){
        randomFirstName = gender === 'female' ? femaleName : maleName;
    } else {
        randomFirstName = _.random(0, 1) ? femaleName : maleName;
    }

    return _.sample(randomFirstName);
}

export function getLastName() : string {
    return _.sample(lastNames) || 'tester';
}

export function getFullName(gender = '') : string {
    const firstName = getFirstName(gender);
    const lastName = getLastName();

    return `${firstName} ${lastName}`;
}

export function createEmail(firstName:string, lastName:string, domain) : string {
    const currentDomain = domain ? domain : 'test.com'
    if (!firstName && !lastName) {
        return 'noNameProvided@test.com';
    }

    return _.join([firstName, lastName, '@', currentDomain], '');
}

export function createRandomEmail() : string {
    const firstName = getFirstName();
    const lastName = getLastName();

    return _.join([firstName, lastName, '@', 'test.com'], '');
}

export function safeguardNumber(quantity){
    const numberAsInt = Math.abs(_.floor(quantity)) || 3;

    return numberAsInt > 50 ? 50 : numberAsInt;
}

export function getMultipleEmails(quantity = 1) : string[] {
    const arrayOfEmails:string[] = [];
    const firstName = getFirstName();
    const lastName = getLastName();
    const revisedQuantity = safeguardNumber(quantity);

    for (let i = 0; i < revisedQuantity; i++) {
        const email = _.join([firstName, lastName, i, '@', 'test.com'], '');
        arrayOfEmails.push(email);
    }

    return arrayOfEmails;
}

export function getPerson(gender = '', domain = '') : Person {
    const firstName = getFirstName(gender);
    const lastName = getLastName();
    const fullName = `${firstName} ${lastName}`;
    const email = createEmail(firstName, lastName, domain);

    return { firstName, lastName, fullName, email };
}

export function getPeople(quantity = 1) : Person[] {
    const people: Person[] = [];
    const revisedQuantity = safeguardNumber(quantity);

    for (let i = 0; i < revisedQuantity; i++) {
        const person = getPerson();
        const userExists = _.some(people, { email: person.email });

        if (!userExists) {
            people.push(person);
        }
    }

    return people;
}
