import _ from 'lodash';
import { vehicleBrands } from './seeds';

export function generateVin({base}) : string {
    const suffix = _.random(100000, 999999);

    return _.join([base, suffix], '');
}

export function getEngineType() : string {
    return _.sample(['petrol', 'diesel', 'autogas', 'naturalgas', 'hybrid']) || 'petrol';
}

export function getRandomBrand() : VehicleBrands {
    return vehicleBrands[_.random(vehicleBrands.length - 1)];
}

export function randomNumber(): string {
    return _.random(10000).toString();
}

export function randomPlatePrefix({ length = 2 }): string {
    let validLength = length;

    if (length > 26 || length < 1){
        validLength = 2;
    }

    const characters = _.shuffle('ABCDEFGHIJKLMNOPQRSTUVWXYZ').join('');

    return characters.slice(-Math.abs(validLength));
}

export function getRandomNumberPlate({ prefix = '', prefixLength = 2 }) : string {
    if (prefix){
        return `${prefix}${randomNumber()}`;
    }

    return `${randomPlatePrefix({ length: prefixLength })}${randomNumber()}`;
}
