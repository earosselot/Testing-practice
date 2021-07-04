const capitalize = require('./capitalize');

test ('all lowercase', () => {
    expect(capitalize('hello world!')).toBe('Hello world!');
})

test ('all uppercase', () => {
    expect(capitalize('HELLO UPPER!')).toBe('Hello upper!');
})

test ('mixedcases', () => {
    expect(capitalize('StRing oF MixEd UppErs And LoweRS')).toBe('String of mixed uppers and lowers');
})

test ('empty string', () => {
    expect(capitalize('')).toBe('');
})

test ('one item string', () => {
    expect(capitalize('a')).toBe('A');

})
