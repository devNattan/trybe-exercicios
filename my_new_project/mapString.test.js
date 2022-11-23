const {encode, decode} = require('./mapString');

describe('testa se as funções encode e decode funcionam', () => {
    test('se encode é definida', () => {
        expect(encode).toBeDefined();
    });
    test('se encode é uma função', () => {
        expect(typeof encode).toEqual('function');
    });
    test('testa se encode retorna o resultado esperado', () => {
        expect(encode('aeiou')).toEqual('12345')
    })
});