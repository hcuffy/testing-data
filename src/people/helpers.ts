import _ from 'lodash';
import moment from 'moment';

import { countries } from './seeds';
import { getChance } from '../utils';

const chance = getChance();

function getRandomItemFromArray(array) {
    return _.sample(array);
}

export function getValidGender(gender ='') {
    const validGenders = ['male', 'female'];
    const lowerCaseGender = _.toLower(gender);

    return validGenders.includes(lowerCaseGender) ? lowerCaseGender : _.toLower(chance.gender());
}

function getValidCountry(country) {
    return country || getRandomItemFromArray(countries);
}

export function getBirthDateAndAge() {
    const birthdate = moment(chance.birthday()).format('YYYY-MM-DD');
    const age = moment().diff(birthdate, 'years');

    return { birthdate, age };
}

export function getFullAddress(country = '') {
    const selectedCountry = getValidCountry(country);

    return {
        country: selectedCountry,
        city:    chance.city(),
        address: chance.address(),
        street:  chance.street(),
        zip:     chance.zip()
    };
}
