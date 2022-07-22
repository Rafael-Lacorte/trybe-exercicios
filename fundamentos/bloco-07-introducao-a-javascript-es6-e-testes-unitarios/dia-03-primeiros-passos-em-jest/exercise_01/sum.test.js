const sum = require('./sum')

test('sums two values, expect 9', () => {
    expect(sum(2,3)).toBe(5);
})

test('sums two values, expect 0', () => {
    expect(sum(0,0)).toBe(0);
})

test('sums two values, expect erro', () => {
    expect(() => { sum() }).toThrow();
})

test('sums two values, expect erro with a message', () => {
    expect(() => { sum() }).toThrowError(new Error('parameters must be numbers'));
})