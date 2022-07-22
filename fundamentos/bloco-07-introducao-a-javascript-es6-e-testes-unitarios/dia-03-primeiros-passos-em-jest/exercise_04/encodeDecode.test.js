const {encode, decode} = require('./encodeDecode.js')



describe('Testa a função encode e decode', () => {
    it('a função encode é definida', () => {
      expect(encode).toBeDefined();
    });
    it('encode é uma função', () => {
      expect(typeof encode).toEqual('function');
    });
    it('converte vogais em numeros no número 1', () => {
      expect(encode('aeiou')).toEqual('12345');
    });
    it('converte vogais em numeros no número 1', () => {
        expect(encode('ana')).toEqual('1n1');
    });
    it('converte vogais em numeros no número 1', () => {
         expect(encode('ana').length).toEqual(3);
    });
    it('converte numeros em vogais', () => {
        expect(decode('12345')).toEqual('aeiou');
    })
    it('converte numeros apena no numero 3', () => {
        expect(decode('939')).toEqual('9i9');
    })
});