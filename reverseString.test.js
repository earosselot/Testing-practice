const reverseString = require('./reverseString');

test('simple test', () => {
    expect(reverseString('abc')).toBe('cba');
})

test('upper and lower cases', () => {
    expect(reverseString('HeLlO, WorLD')).toBe('DLroW ,OlLeH');
})

test('string lenght 1', () => {
    expect(reverseString('a')).toBe('a');
})

test('empty string', () => {
    expect(reverseString('')).toBe('');
})
