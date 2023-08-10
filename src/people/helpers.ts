import _ from 'lodash';
import Chance from 'chance';
import moment from 'moment';

import { countries } from './seeds';

export const chance = new Chance();

export function getGender(gender){
    const updatedGender = _.includes(['male', 'female'], _.toLower(gender)) ? gender : chance.gender();

    return _.toLower(updatedGender);
}

export function getBirthDateAndAge(){
    const birthdate = moment(chance.birthday()).format('YYYY-MM-DD');
    const age = moment().diff(birthdate, 'years');

    return { birthdate, age };
}

function getCountry(country){
    return country ? country : _.sample(countries);
}

export function getFullAddress(data){
    const country = getCountry(data?.country);

    return {
        country: country|| _.sample(countries),
        city:    chance.city(),
        address: chance.address(),
        street:  chance.street(),
        zip:     chance.zip()
    };
}
