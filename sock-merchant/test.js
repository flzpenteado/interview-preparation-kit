const sockMerchant = require('./index');

test('Given arr = [1, 2, 1, 2, 1, 3, 2], the output must be 2', () => {
    expect(sockMerchant([1, 2, 1, 2, 1, 3, 2])).toBe(2);
});

test('Given arr = [10, 20, 20, 10, 10, 30, 50, 10, 20], the output must be 2', () => {
    expect(sockMerchant([10, 20, 20, 10, 10, 30, 50, 10, 20])).toBe(3);
});