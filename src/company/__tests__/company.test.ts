/* eslint-disable @typescript-eslint/no-var-requires */

describe('Company', () => {
    test('return company name and address', function() {
        const getCompany = require('../company').getCompany;
        const company = getCompany('');

        expect(company.name).toStrictEqual(expect.any(String));
        expect(company.address.address).toStrictEqual(expect.any(String));
        expect(company.address.country).toStrictEqual(expect.any(String));
        expect(company.address.zip).toStrictEqual(expect.any(String));
    });

    test('return company with Germany as the country', function() {
        const getCompany = require('../company').getCompany;
        const company = getCompany('Germany');

        expect(company.address.country).toEqual('Germany');
    });
});
