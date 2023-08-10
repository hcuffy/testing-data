import _ from 'lodash';
import { vehicleBrands } from './seeds';

export function generateVin({ base }) : string {
    const suffix = _.random(100000, 999999);

    return _.join([base, suffix], '');
}

export function getEngineType() : string {
    return _.sample(['petrol', 'diesel', 'autogas', 'naturalgas', 'hybrid']) || 'petrol';
}

export function getRandomBrand() : VehicleBrands {
    return vehicleBrands[_.random(vehicleBrands.length - 1)];
}

function randomNumber(): string {
    return _.random(99999).toString();
}

function randomPlatePrefix(prefixLength): string {
    let validLength = prefixLength || 2;

    if (prefixLength > 26 || prefixLength < 1){
        validLength = 2;
    }

    const characters = _.shuffle('ABCDEFGHIJKLMNOPQRSTUVWXYZ').join('');

    return characters.slice(-Math.abs(validLength));
}

export function getRandomNumberPlate(data) : string {
    const prefix = data?.prefix || '';
    const prefixLength = data?.prefixLength || 2;

    if (prefix){
        return `${prefix}${randomNumber()}`;
    }

    return `${randomPlatePrefix(prefixLength)}${randomNumber()}`;
}
