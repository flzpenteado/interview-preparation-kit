const jumpingOnTheClouds = require('./index');

test('Given c = [0, 1, 0, 0, 0, 1, 0], the output must be 3', () =>{
    expect(jumpingOnTheClouds([0, 1, 0, 0, 0, 1, 0])).toBe(3);
});

test('Given c = [0, 0, 0, 0, 1, 0], the output must be 3', () =>{
    expect(jumpingOnTheClouds([0, 0, 0, 0, 1, 0])).toBe(3);
});