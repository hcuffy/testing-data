import _ from 'lodash';
import { chance, getBirthDateAndAge, getGender } from './helpers';

export function getFullName({ gender = '' }) : string {
    const updatedGender = getGender({gender});

    return chance.name({ gender: updatedGender });
}

export function getFirstName({ gender = '' }) : string {
    const fullName = getFullName({ gender });

    return _.split(fullName, ' ')[0];
}

export function getLastName() : string {
    const fullName = getFullName({ gender: '' });

    return _.split(fullName, ' ')[1];
}

export function createEmail({ firstName, lastName, customText = '', domain }) : string {
    const currentDomain = domain ? domain : 'test.com';

    if (!firstName && !lastName) {
        return chance.email();
    }

    return _.join([firstName, lastName, customText, '@', currentDomain], '');
}

export function createRandomEmail() : string {
    return chance.email({ domain: 'test.com' });
}

export function safeguardNumber({ quantity }){
    const numberAsInt = Math.abs(_.floor(quantity)) || 3;

    return numberAsInt > 50 ? 50 : numberAsInt;
}

export function getMultipleEmails({ quantity = 1, domain }) : string[] {
    const arrayOfEmails:string[] = [];
    const firstName = getFirstName({});
    const lastName = getLastName();
    const revisedQuantity = safeguardNumber({ quantity });

    for (let i = 0; i < revisedQuantity; i++) {
        const email = createEmail({ firstName, lastName, customText: i.toString(), domain });

        arrayOfEmails.push(email);
    }

    return arrayOfEmails;
}

export function getPerson({ gender = '', domain = '' }) : Person {
    const updatedGender = getGender({gender});
    const firstName = getFirstName({ gender: updatedGender });
    const lastName = getLastName();
    const fullName = `${firstName} ${lastName}`;
    const email = createEmail({ firstName, lastName, customText: '', domain });
    const birthday = getBirthDateAndAge();

    return {
        firstName,
        lastName,
        fullName,
        email,
        gender: updatedGender,
        ...birthday
    };
}

export function getPeople({ quantity = 1 }) : Person[] {
    const people: Person[] = [];
    const revisedQuantity = safeguardNumber({ quantity });

    for (let i = 0; i < revisedQuantity; i++) {
        const person = getPerson({});
        const userExists = _.some(people, { email: person.email });

        if (!userExists) {
            people.push(person);
        }
    }

    return people;
}
