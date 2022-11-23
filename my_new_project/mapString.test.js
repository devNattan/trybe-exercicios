const {encode, decode} = require('./mapString');

describe('testa se as funções encode e decode funcionam', () => {
    test('se encode é definida', () => {
        expect(encode).toBeDefined();
    });
    test('se encode é uma função', () => {
        expect(typeof encode).toEqual('function');
    });
    test('testa se encode retorna o resultado esperado', () => {
        expect(encode('aeiou')).toEqual('12345');
    });
    test('se decode é definida', () => {
        expect(decode).toBeDefined();
    });
    test('testa se decode é uma func', () => {
        expect(typeof decode).toEqual('function');
    });
    test('testa se decode retorna o resultado esperado', () => {
        expect(decode('12345')).toEqual('aeiou');
    })
});