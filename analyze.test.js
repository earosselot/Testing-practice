const analyze = require('./analyze');

test('simple test average', () => {
    let object = analyze([1,2,3,4]);
    expect(object['average']).toBeCloseTo(2.5);
});

test('simple test min', () => {
    let object = analyze([1,2,3,4]);
    expect(object['min']).toBe(1);
});

test('simple test max', () => {
    let object = analyze([1,2,3,4]);
    expect(object['max']).toBe(4);
});

test('simple test lenght', () => {
    let object = analyze([1,2,3,3,4]);
    expect(object['length']).toBe(5);
});

test('empty test average', () => {
    let object = analyze([]);
    expect(object['average']).toBe(0);
});

test('empty test min', () => {
    let object = analyze([]);
    expect(object['min']).toBe(undefined);
});

test('empty test max', () => {
    let object = analyze([]);
    expect(object['max']).toBe(undefined);
});

test('empty test lenght', () => {
    let object = analyze([]);
    expect(object['length']).toBe(0);
});

test('complex test average', () => {
    let object = analyze([-1000,2000,32154,4000]);
    expect(object['average']).toBeCloseTo(9288.5);
});

test('complex test min', () => {
    let object = analyze([-1000,2000,32154,4000]);
    expect(object['min']).toBe(-1000);
});

test('complex test max', () => {
    let object = analyze([-1000,2000,32154,4000]);
    expect(object['max']).toBe(32154);
});

test('complex test lenght', () => {
    let object = analyze([-1000,2000,32154,4000]);
    expect(object['length']).toBe(4);
});
