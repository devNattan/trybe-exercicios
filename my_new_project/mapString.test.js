const {encode, decode} = require('./mapString');

describe('testa se as funções encode e decode funcionam', () => {
    test('se encode é uma func', () => {
        expect(encode).toBeDefined();
        expect(typeof encode).toEqual('function');
    });
});