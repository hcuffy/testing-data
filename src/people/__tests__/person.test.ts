import { testing } from '../';

describe('Person', () => {
    test('Should return a person text', function() {
        const text = testing('it works!!');

        expect(text).toEqual('This is your string: it works!!');
    });
});
