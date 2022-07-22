const myFizzBuzz = require('./myFizzBuzz')

describe('test if the function myFizzBuzz works', () => {
    it('must return the right string', () => {
        expect(myFizzBuzz(15)).toEqual('fizzbuzz')
        expect(myFizzBuzz(9)).toEqual('fizz')
        expect(myFizzBuzz(20)).toEqual('buzz')
    })
})