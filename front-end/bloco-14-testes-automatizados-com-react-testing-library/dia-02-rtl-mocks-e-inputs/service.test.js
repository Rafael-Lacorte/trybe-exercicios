const service = require("./service");


describe('testes exercicios 1', () => {
  
    it('Verifica se a função de gerar numeros aleatórios funciona', () => {
        service.randomNumberGenerator = jest.fn().mockReturnValue(10);
        expect(service.randomNumberGenerator()).toBe(10)
        expect(service.randomNumberGenerator).toHaveBeenCalledTimes(1)
    })
    it('Verifica se a função de gerar numeros aleatórios retorna a divisão de dois numeros', () => {
        service.randomNumberGenerator = jest.fn().mockImplementation((a, b) => a/b)
        expect(service.randomNumberGenerator(10,2)).toBe(5)
        expect(service.randomNumberGenerator).toHaveBeenCalledTimes(1)
        
    })
    it('Verifica se a função de gerar numeros aleatórios retorna a divisão de dois numeros', () => {
        service.randomNumberGenerator = jest.fn().mockImplementation((a, b, c) => a*b*c)
        expect(service.randomNumberGenerator(10,2,3)).toBe(60)
        expect(service.randomNumberGenerator).toHaveBeenCalledTimes(1)
        service.randomNumberGenerator = jest.fn().mockImplementation((a) => a*2)
        expect(service.randomNumberGenerator(10)).toBe(20)
        expect(service.randomNumberGenerator).toHaveBeenCalledTimes(1)
    })
  
    it('Verifica se a função retorna string me caixa alta', () => {
        const mockToUpperCase = jest.spyOn(service, 'toUpperCase').mockImplementation((s) => s.toLowerCase())
        expect(mockToUpperCase('VRAU')).toBe('vrau')
        expect(service.toUpperCase).toHaveBeenCalledTimes(1)
    })
    it('Verifica se a função retorna a primeira letra', () => {
        service.lastLetter = jest.fn().mockImplementation((string) => string.slice(-1))
        expect(service.lastLetter('VRAU')).toBe('U')
        expect(service.lastLetter).toHaveBeenCalledTimes(1)
    })
    it('Verifica se a função retornar duas string concatenadas', () => {
        service.concatStrings = jest.fn().mockImplementation((a,b,c) => a+b+c)
        expect(service.concatStrings('a','b','c')).toBe('abc')
        expect(service.concatStrings).toHaveBeenCalledTimes(1)
    })
    it('Verifica se a função restaurada retorna string em caixa alta', () => {
        service.toUpperCase.mockRestore()
        expect(service.toUpperCase('vRau')).toBe('VRAU')
    })
    it('Verifica se a função retorna string me caixa alta', () => {
        
    })

    describe ('Testa funcionamento função que usa API', () => {
        service.fetchDog = jest.fn();
        afterEach(service.fetchDog.mockReset)

        test("testando requisição caso a promise resolva", async () => {
            service.fetchDog.mockResolvedValue("request success");
            service.fetchDog();
            expect(service.fetchDog).toHaveBeenCalled();
            expect(service.fetchDog).toHaveBeenCalledTimes(1);
            await expect(service.fetchDog()).resolves.toBe("request success");
            expect(service.fetchDog).toHaveBeenCalledTimes(2);
          });
    })

});

