import _ from 'lodash';
import Chance from 'chance';
import moment from 'moment';

import { countries } from './seeds';

export const chance = new Chance();

export function getGender(gender){
    const updatedGender = _.includes(['male', 'female'], _.lowerCase(gender)) ? gender : chance.gender();

    return _.lowerCase(updatedGender);
}

export function getBirthDateAndAge(){
    const birthdate = moment(chance.birthday()).format('YYYY/MM/DD');
    const age = moment().diff(birthdate, 'years');

    return { birthdate, age };
}

export function getCountry(country){
    return country ? country : _.sample(countries);
}

export function getFullAddress(addressArgs){
    const country = getCountry(addressArgs?.country);

    return { street: chance.address(),
        country,
        zip:    chance.zip() };
}
