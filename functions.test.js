const sum = require('./functions');

test('adds 2 + 2 to equal 4', () => {
    expect(sum(2, 2)).toBe(4);
});