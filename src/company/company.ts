import _ from 'lodash';

import { chance, getFullAddress } from '../people';

export function getCompany(country =''){
    const buildingNumber = _.random(9999);
    const name = `${chance.company()} ${buildingNumber}`;
    const address = getFullAddress({ country });

    return { name, address };
}
