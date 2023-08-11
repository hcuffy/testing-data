import _ from 'lodash';

import { getFullAddress } from '../people';
import { getChance } from '../utils';

const chance = getChance();

function generateCompanyName() {
    const buildingNumber = _.random(9999);
    const companyName = chance.company();

    return `${companyName} ${buildingNumber}`;
}

export function getCompany(country = '') {
    const companyName = generateCompanyName();
    const address = getFullAddress(country);

    return { name: companyName, ...address };
}
