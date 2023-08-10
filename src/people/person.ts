import _ from 'lodash';
import { chance, getBirthDateAndAge, getGender, getFullAddress } from './helpers';

export function getFullName(gender) : string {
    const updatedGender = getGender({ gender });

    return chance.name({ gender: updatedGender });
}

export function getFirstName(gender) : string {
    const fullName = getFullName({ gender });

    return _.split(fullName, ' ')[0];
}

export function getLastName() : string {
    const fullName = getFullName('');

    return _.split(fullName, ' ')[1];
}

export function createEmail(data) : string {
    const firstName = data?.firstName;
    const lastName = data?.lastName;
    const customText = data?.customText || '';
    const domain = data?.domain || 'test.com';

    if (!firstName && !lastName) {
        return chance.email();
    }

    const email = _.join([firstName, lastName, customText, '@', domain], '');

    return _.toLower(email);
}

export function createRandomEmail() : string {
    return chance.email({ domain: 'test.com' });
}

export function safeguardNumber(quantity: number){
    const numberAsInt = Math.abs(_.floor(quantity)) || 3;

    return numberAsInt > 50 ? 50 : numberAsInt;
}

export function getMultipleEmails(data) : string[] {
    const quantity = data?.quantity || 1;
    const domain = data?.domain || 'test.com';
    const arrayOfEmails:string[] = [];
    const firstName = getFirstName({});
    const lastName = getLastName();
    const revisedQuantity = safeguardNumber(quantity);

    for (let i = 0; i < revisedQuantity; i++) {
        const email = createEmail({ firstName, lastName, customText: i.toString(), domain });

        arrayOfEmails.push(email);
    }

    return arrayOfEmails;
}

export function getPerson(data) : Person {
    const gender = data?.gender || '';
    const domain= data?.domain|| '';
    const country = data?.country|| '';
    const customText = data?.customText || '';
    const updatedGender = getGender({ gender });
    const firstName = getFirstName({ gender: updatedGender });
    const lastName = getLastName();
    const fullName = `${firstName} ${lastName}`;
    const email = createEmail({ firstName, lastName, customText, domain });

    return {
        firstName,
        lastName,
        fullName,
        email,
        gender: updatedGender,
        ...getBirthDateAndAge(),
        ...getFullAddress({ country })
    };
}

export function getPeople(data ={ quantity: 1 }) : Person[] {
    const { quantity } = data;
    const people: Person[] = [];
    const revisedQuantity = safeguardNumber(quantity);

    for (let i = 0; i < revisedQuantity; i++) {
        const person = getPerson({});
        const personExists = _.some(people, { email: person.email });

        if (!personExists) {
            people.push(person);
        }
    }

    return people;
}
