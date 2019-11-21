const countingValleys = require('./index');

test("Given s = 'UDDDUDUU', the output must be 1", () => {
    expect(countingValleys('UDDDUDUU')).toBe(1);
});