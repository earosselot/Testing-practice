const calculator = require('./calculator');

test('simple addition', () => {
    expect(calculator.add(1, 2)).toBe(3);
})

test('negative addition', () => {
    expect(calculator.add(-1, -4)).toBe(-5)
})

test('float addition', () => {
    expect(calculator.add(1.34, 5.35)).toBeCloseTo(6.69);
})

test('simple substraction', () => {
    expect(calculator.substract(6, 2)).toBe(4);
})

test('negative substraction', () => {
    expect(calculator.substract(-5, -2)).toBe(-3);
})

test('simple multiply', () => {
    expect(calculator.multiply(5, 2)).toBe(10);
})

test('one negative multiply', () => {
    expect(calculator.multiply(5, -2)).toBe(-10);
})

test('two negatives multiply', () => {
    expect(calculator.multiply(-8, -4)).toBe(32);
})

test('simple division', () => {
    expect(calculator.divide(6, 2)).toBe(3);
})

test('float division', () => {
    expect(calculator.divide(7, 2)).toBeCloseTo(3.5);
})

test('division by 0', () => {
    expect(calculator.divide(7, 0)).toBe(Infinity);
})
