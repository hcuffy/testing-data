import { fillUniqueItems, getChance, safeguardNumber } from '../utils';

describe('safeguardNumber', () => {
    test('returns 3 by default when no argument is provided', function() {
        expect(safeguardNumber()).toEqual(3);
    });

    test('caps at 50 when argument exceeds 50', function() {
        expect(safeguardNumber(51)).toEqual(50);
        expect(safeguardNumber(100)).toEqual(50);
    });

    test('returns the floor of a float', function() {
        expect(safeguardNumber(4.9)).toEqual(4);
        expect(safeguardNumber(7.6505)).toEqual(7);
    });

    test('returns the absolute value of a negative number', function() {
        expect(safeguardNumber(-5)).toEqual(5);
        expect(safeguardNumber(-1)).toEqual(1);
    });

    test('returns the value as-is when within bounds', function() {
        expect(safeguardNumber(10)).toEqual(10);
        expect(safeguardNumber(50)).toEqual(50);
        expect(safeguardNumber(1)).toEqual(1);
    });
});

describe('getChance', () => {
    test('returns a Chance instance', function() {
        const chance = getChance();

        expect(chance).toBeDefined();
        expect(typeof chance.name).toStrictEqual('function');
        expect(typeof chance.email).toStrictEqual('function');
    });

    test('returns a new instance on each call', function() {
        const chance1 = getChance();
        const chance2 = getChance();

        expect(chance1).not.toBe(chance2);
    });
});

describe('fillUniqueItems', () => {
    test('returns an array of the requested length', function() {
        let counter = 0;
        const items = fillUniqueItems(5, () => counter++, (candidate, existing) => existing.includes(candidate));

        expect(items).toHaveLength(5);
    });

    test('returns unique items only', function() {
        const pool = [1, 2, 3, 4, 5];
        let index = 0;
        const items = fillUniqueItems(3, () => pool[index++ % pool.length], (candidate, existing) => existing.includes(candidate));

        expect(new Set(items).size).toEqual(items.length);
    });

    test('returns as many items as possible when max attempts are exhausted', function() {
        const items = fillUniqueItems(10, () => 42, (candidate, existing) => existing.includes(candidate));

        expect(items).toHaveLength(1);
    });

    test('returns an empty array when target is 0', function() {
        const items = fillUniqueItems(0, () => 1, () => false);

        expect(items).toHaveLength(0);
    });
});
