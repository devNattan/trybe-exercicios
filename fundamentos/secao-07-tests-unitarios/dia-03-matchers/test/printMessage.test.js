const { info } = require('../src/printMessage');

describe('testa se o obj info tem a chave personagem', () => {
    it('testa se info tem personagem dentro', () => {
        expect(info).toHaveProperty('personagem');
    });
});