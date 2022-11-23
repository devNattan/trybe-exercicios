const { info, printMessage } = require('../src/printMessage');

describe('testa se o obj info tem a chave personagem', () => {
    it('testa se info tem personagem dentro', () => {
        expect(info).toHaveProperty('personagem');
    });
});

describe('testa se printMessage é uma função', () => {
    it('testa se a função é definida', () => {
        expect(printMessage).toBeDefined();
    });
    it('testa se a função é uma função', () => {
        expect(typeof printMessage).toEqual('function');
    });
    it('testa se a função imprime', () => {
        expect(printMessage(info)).toMatch('Boas vindas');
    });
    it('testa se a resposta contem o nome do personagem', () => {
        expect(printMessage(info)).toMatch(info.personagem);
    })
});

describe('teste de exceção da função', () => {
    expect(() => printMessage(1)).toThrow('objeto inválido');
});