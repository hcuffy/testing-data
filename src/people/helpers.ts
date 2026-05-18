import dayjs from 'dayjs';

import { countries } from './seeds';
import { getChance } from '../utils';

const chance = getChance();

function getRandomItemFromArray<T>(array: T[]): T {
    return array[Math.floor(Math.random() * array.length)];
}

export function getValidGender(gender = ''): Gender {
    const validGenders: Gender[] = ['male', 'female'];
    const lowerCaseGender = gender.toLowerCase();

    if (validGenders.includes(lowerCaseGender as Gender)) {
        return lowerCaseGender as Gender;
    }

    return chance.gender().toLowerCase() as Gender;
}

function getValidCountry(country: string): string {
    return country || getRandomItemFromArray(countries);
}

export function getBirthDateAndAge(): BirthDateAndAge {
    const birthdate = dayjs(chance.birthday()).format('YYYY-MM-DD');
    const age = dayjs().diff(birthdate, 'year');

    return { birthdate, age };
}

export function getFullAddress(country = ''): FullAddress {
    const selectedCountry = getValidCountry(country);

    return {
        country:      selectedCountry,
        city:         chance.city(),
        address:      chance.address(),
        street:       chance.street(),
        streetNumber: chance.d100(),
        zip:          chance.zip()
    };
}
