let sum = require('../src/sum');

describe('testa a função sum', () =>{
    it('testa se a função sum é declarada', () => {
        expect(sum).toBeDefined();
    });
    it('testa se sum é uma função', () => {
        expect(typeof sum).toEqual('function');
    });
    it('testa se o retorno de sum(4, 5) é 9', () => {
        expect(sum(4,5)).toEqual(9);
    });
    it('testa se o retorno de sum(0, 0) é 0', () => {
        expect(sum(0,0)).toEqual(0);
    });
    it('deve disparar um erro caso receba como parâmetro uma string', () => {
        expect(() => sum(4,'5')).toThrowError();
        expect(() => sum(4,'5')).toThrowError('parameters must be numbers');
    });
});