const myRemove = require('./myRemove');

describe('testa a função myRemove', () => {
    test('deve retornar um array removendo o item correto', () => {
        expect(myRemove([1, 2, 3, 4], 3)).toEqual([1, 2, 4]);
        expect(myRemove([1,2,3,4], 3)).concat.toEqual([1,2,3,4]);
    });
});