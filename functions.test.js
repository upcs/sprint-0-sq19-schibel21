/*Sarah Schibel*/
/*January 26th 2019*/
/*DOCTYPE JS*/

const sum = require('./functions');

test('adds 1 + 2 to equal 3', () => {
    expect(sum(1,2)).toBe(4);
});

test('adding positive numbers does not equal to less then zero', () => {
    for(let a = 1; a < 10; a++){
        for(let b = 1; b < 10; b++){
            expect(a + b).not.toBe(-1);
        }
    }
});