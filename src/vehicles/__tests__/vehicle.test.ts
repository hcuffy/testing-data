import _ from 'lodash';
import { getRandomVin, getVehicle, getVehicles } from '../';
import { vehicleBrands } from '../seeds';

describe('Vehicle Data', () => {
    test('return a random engine type', function() {
        const vin = getRandomVin();

        expect(vin.length).toEqual(17);
        expect(vin).not.toBeFalsy();
        expect(vin).toStrictEqual(expect.any(String));
    });

    test('return random vehicle when brand is not provided', function() {
        const vehicle = getVehicle({});
        const vehicleObject = vehicleBrands.find(brands => brands.brand === vehicle.brand);

        expect(vehicle).not.toBeFalsy();
        expect(vehicle).toBeInstanceOf(Object);
        expect(vehicle.brand).toStrictEqual(expect.any(String));
        expect(vehicleBrands).toContain(vehicleObject);
        expect(vehicle.model).toStrictEqual(expect.any(String));
        expect(vehicle.vin).toStrictEqual(expect.any(String));
        expect(vehicle.engine).toStrictEqual(expect.any(String));
    });

    test('return specified brand as a vehicle', function() {
        const vehicle = getVehicle({ brand: 'Honda' });
        const vehicleObject = vehicleBrands.find(brands => brands.brand === 'Honda');

        expect(vehicle).not.toBeFalsy();
        expect(vehicle).toBeInstanceOf(Object);
        expect(vehicle.brand).toStrictEqual('Honda');
        expect(vehicleObject?.models).toContain(vehicle.model);
        expect(vehicle.vin).toStrictEqual(expect.any(String));
        expect(vehicle.engine).toStrictEqual(expect.any(String));
        expect(vehicle.numberPlate).toStrictEqual(expect.any(String));
    });

    test('vehicle object returns five props', function() {
        const vehicle = getVehicle({});
        const objectSize = _.size(vehicle);
        expect(objectSize).toEqual(5);
        expect(vehicle.numberPlate).toStrictEqual(expect.any(String));
    });
});

describe('Random vehicles', () => {
    test('returns array of 1 random vehicle', function() {
        const vehicles = getVehicles();

        expect(vehicles).toBeInstanceOf(Array);
        expect(vehicles).toHaveLength(1);
    });

    test('returns array of random vehicles if number is a float', function() {
        const vehicles = getVehicles({ quantity: 3.098 });

        expect(vehicles).toBeInstanceOf(Array);
        expect(vehicles).toHaveLength(3);
    });
});
