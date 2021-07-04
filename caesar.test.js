const caesar = require('./caesar');

test('simple test', () => {
    expect(caesar('ab', 5)).toBe('fg');
})

test('capital test', () => {
    expect(caesar('Hello World!', 10)).toBe('Rovvy Gybvn!');
})

test('all capitals', () => {
    expect(caesar('HOW ARE YOU?', 10)).toBe('RYG KBO IYE?');
})

test('negative shift', () => {
    expect(caesar('Attack at down', -15)).toBe('Leelnv le ozhy')
})
