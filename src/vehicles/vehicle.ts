import _ from 'lodash';
import { vehicleBrands } from './seeds';
import { safeguardNumber } from '../people';
import { generateVin, getEngineType, getRandomBrand, getRandomNumberPlate } from './helpers';

export function getRandomVin() : string {
    const vehicleObject = getRandomBrand();

    return generateVin({ base: vehicleObject.vinBase });
}

export function getVehicle(vehicle) : Vehicle {
    const vehicleObject = _.find(vehicleBrands, { brand: vehicle?.brand }) || getRandomBrand();
    const vehicleModels = vehicleObject.models;
    const model = vehicleModels[_.random(vehicleModels.length - 1)];
    const vin = generateVin({ base: vehicleObject.vinBase });
    const engine = getEngineType();
    const numberPlate = getRandomNumberPlate({});

    return {
        brand: vehicleObject.brand, model, vin, engine, numberPlate
    };
}

export function getVehicles(vehicle ={ quantity: 1 }) : Vehicle[] {
    const { quantity } = vehicle;
    const vehicles: Vehicle[] = [];
    const revisedQuantity = safeguardNumber(quantity);

    for (let i = 0; i < revisedQuantity; i++) {
        const vehicle = getVehicle({});
        const vehicleExists = _.some(vehicles, { vin: vehicle.vin });

        if (!vehicleExists) {
            vehicles.push(vehicle);
        }
    }

    return vehicles;
}
