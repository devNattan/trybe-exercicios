const myFizzBuzz = require('./myFizzBuzz');

describe('Testa a função fizzBuzz', () => {
    test('deve retornar o valor esperado', () => {
        expect(myFizzBuzz(15)).toBe('fizzbuzz');
    });
});