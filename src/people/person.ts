import { getBirthDateAndAge, getValidGender, getFullAddress } from './helpers';
import { fillUniqueItems, getChance, safeguardNumber } from '../utils';
import type {
    CreateEmailOptions,
    GetMultipleEmailsOptions,
    GetPeopleOptions,
    GetPersonOptions,
    Person,
    PhoneNumbers
} from '../types';

export { safeguardNumber } from '../utils';

const chance = getChance();

export function getFullName(gender = ''): string {
    const updatedGender = getValidGender(gender);

    return chance.name({ gender: updatedGender });
}

export function getFirstName(gender = ''): string {
    const fullName = getFullName(gender);

    return fullName.split(' ')[0];
}

export function getLastName(): string {
    const fullName = getFullName('');

    return fullName.split(' ')[1];
}

export function createEmail(data: CreateEmailOptions = {}): string {
    const firstName = data.firstName;
    const lastName = data.lastName;
    const customText = data.customText || '';
    const domain = data.domain || 'test.com';

    if (!firstName && !lastName) {
        return chance.email();
    }

    const email = [firstName, lastName, customText, '@', domain].join('');

    return email.toLowerCase();
}

export function createRandomEmail(): string {
    return chance.email({ domain: 'test.com' });
}

export function getMultipleEmails(data: GetMultipleEmailsOptions = { quantity: 1, domain: '' }): string[] {
    const quantity = data.quantity;
    const domain = data.domain || 'test.com';
    const arrayOfEmails: string[] = [];
    const firstName = getFirstName();
    const lastName = getLastName();
    const revisedQuantity = safeguardNumber(quantity);

    for (let index = 0; index < revisedQuantity; index++) {
        const email = createEmail({ firstName,
            lastName,
            customText: index.toString(),
            domain });

        arrayOfEmails.push(email);
    }

    return arrayOfEmails;
}

const availableCountries = { us: '1', uk: '44', fr: '33' };

export function getPhoneNumbers(): PhoneNumbers {
    const entries = Object.entries(availableCountries);
    const [key, value] = entries[Math.floor(Math.random() * entries.length)];
    const landline = chance.phone({ country: key, formatted: false });
    const mobileNumber = chance.phone({ country: key, formatted: false, mobile: true });

    return { landline, mobileNumber, phoneCountry: key, phoneCountryCode: value };
}

export function getPerson(data: GetPersonOptions = {}): Person {
    const gender = data.gender || '';
    const domain = data.domain || '';
    const country = data.country || '';
    const customText = data.customText || '';
    const updatedGender = getValidGender(gender);
    const firstName = getFirstName(updatedGender);
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
        ...getFullAddress(country),
        ...getPhoneNumbers()
    };
}

export function getPeople(data: GetPeopleOptions = { quantity: 1 }): Person[] {
    const revisedQuantity = safeguardNumber(data.quantity);

    return fillUniqueItems(
        revisedQuantity,
        () => getPerson({}),
        (person, people) => people.some(existingPerson => existingPerson.email === person.email)
    );
}
