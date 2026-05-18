import _ from 'lodash';

import { vehicleBrands } from './seeds';
import { fillUniqueItems, safeguardNumber } from '../utils';
import { generateVin, getEngineType, getRandomBrand, getRandomNumberPlate } from './helpers';
import type { GetVehicleOptions, GetVehiclesOptions, Vehicle } from '../types';

export function getRandomVin(): string {
    const vehicleObject = getRandomBrand();

    return generateVin({ base: vehicleObject.vinBase });
}

export function getVehicle(vehicle: GetVehicleOptions = {}): Vehicle {
    const vehicleObject = vehicleBrands.find(brand => brand.brand === vehicle.brand) || getRandomBrand();
    const vehicleModels = vehicleObject.models;
    const model = vehicleModels[_.random(vehicleModels.length - 1)];
    const vin = generateVin({ base: vehicleObject.vinBase });
    const engine = getEngineType();
    const numberPlate = getRandomNumberPlate({});

    return {
        brand: vehicleObject.brand,
        model,
        vin,
        engine,
        numberPlate
    };
}

export function getVehicles(vehicle: GetVehiclesOptions = { quantity: 1 }): Vehicle[] {
    const revisedQuantity = safeguardNumber(vehicle.quantity);

    return fillUniqueItems(
        revisedQuantity,
        () => getVehicle({}),
        (generatedVehicle, vehicles) => vehicles.some(existingVehicle => existingVehicle.vin === generatedVehicle.vin)
    );
}
