const getMaxHour = require('./index');

const inputStr =
 `1 1 1 0 0 0
0 1 0 0 0 0
1 1 1 0 0 0
0 0 2 4 4 0
0 0 0 2 0 0
0 0 1 2 4 0`;

const lines = inputStr.split('\n');
const input = lines.map(line => line.split(' '));

test('Given the above input, te output must be 19', () => {
    expect(getMaxHour(input)).toBe(19);
})