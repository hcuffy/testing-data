import _ from 'lodash';
import { vehicleBrands } from './seeds';
import { safeguardNumber } from '../people';

function generateVin(base) : string {
    const suffix = _.random(100000, 999999);

    return _.join([base, suffix], '');
}

function getEngineType() : string {
    return _.sample(['petrol', 'diesel', 'autogas', 'naturalgas', 'hybrid']) || 'petrol';
}

function getRandomBrand() : VehicleBrands {
    return vehicleBrands[_.random(vehicleBrands.length - 1)];
}

export function getRandomVin() : string {
    const vehicleObject = getRandomBrand();

    return generateVin(vehicleObject?.vinBase);
}

export function getVehicle(brand = '') : Vehicle {
    const vehicleObject = _.find(vehicleBrands, { brand }) || getRandomBrand();
    const vehicleModels = vehicleObject.models;
    const model = vehicleModels[_.random(vehicleModels.length - 1)];
    const vin = generateVin(vehicleObject.vinBase);
    const engine = getEngineType();

    return { brand: vehicleObject.brand, model, vin, engine };
}

export function getVehicles(quantity = 1) : Vehicle[] {
    const vehicles: Vehicle[] = [];
    const revisedQuantity = safeguardNumber(quantity);

    for (let i = 0; i < revisedQuantity; i++) {
        const vehicle = getVehicle();
        const vehicleExists = _.some(vehicles, { vin: vehicle.vin });

        if (!vehicleExists) {
            vehicles.push(vehicle);
        }
    }

    return vehicles;
}
