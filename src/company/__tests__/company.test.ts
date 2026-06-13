import { getCompany } from '../company';

describe('Company', () => {
    test('return company name and address', function() {
        const company = getCompany();

        expect(company.name).toStrictEqual(expect.any(String));
        expect(company.address).toStrictEqual(expect.any(String));
        expect(company.street).toStrictEqual(expect.any(String));
        expect(company.streetNumber).toStrictEqual(expect.any(Number));
        expect(company.country).toStrictEqual(expect.any(String));
        expect(company.zip).toStrictEqual(expect.any(String));
    });

    test('return company with Germany as the country', function() {
        const company = getCompany({ country: 'Germany' });

        expect(company.country).toEqual('Germany');
    });
});
