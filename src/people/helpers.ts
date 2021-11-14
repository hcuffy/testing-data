import _ from 'lodash';
import Chance from 'chance';
import moment from 'moment';

export const chance = new Chance();

export function getGender(gender){
    const updatedGender = gender ? gender : chance.gender();

    return _.lowerCase(updatedGender);
}

export function getBirthDateAndAge(){
    const birthdate = moment(chance.birthday()).format('YYYY/MM/DD');
    const age = moment().diff(birthdate, 'years');

    return { birthdate, age };
}
