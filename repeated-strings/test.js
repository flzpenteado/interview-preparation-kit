const repeatedString = require('./index');

test(`Given s = 'abcac' and n = 10, the result must be 4`, () =>{
    expect(repeatedString('abcac', 10)).toBe(4);
});

test(`Given s = 'a' and n = 1000000000000, the result must be 1000000000000`, () =>{
    expect(repeatedString('a', 1000000000000)).toBe(1000000000000);
});

test(`Given s = 'aba' and n = 10, the result must be 7`, () =>{
    expect(repeatedString('aba', 10)).toBe(7);
});