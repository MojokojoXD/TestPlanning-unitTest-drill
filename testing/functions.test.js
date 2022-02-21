const functions = require('./functions');



test('test for returnTwo function', () => {
    expect(functions.returnsTwo()).toBe(2);
})

test('test for greeting function', () => {
    expect(functions.greeting('Jonas')).toBe('Hello, Jonas');
})

test('test for add function', () => {
    expect(functions.add(1,2)).toBe(3);
})


describe('Math functions' , () => {
    test('Addition', () => {
        expect(functions.add(10, 5)).toBe(15)
    });

    test('Subtraction', () => {
        expect(functions.subtract(10,5)).toBe(5)
    });

    test('Multiplication', () => {
        expect(functions.multiple(10,5)).toBe(50)
    });

    test('Division', () => {
        expect(functions.divide(10,5)).toBe(2)
    });
})