const getHourglass = (row, column, arr ) => {
    const hourglass = [];
    hourglass.push(arr[row][column]);
    hourglass.push(arr[row][column + 1]);
    hourglass.push(arr[row][column + 2]);
    
    hourglass.push(arr[row + 1][column + 1]);
    
    hourglass.push(arr[row + 2][column]);
    hourglass.push(arr[row + 2][column + 1]);
    hourglass.push(arr[row + 2][column + 2]);

    return hourglass
}

const getMaxHour = (input) => {
    const hourglasses = [];
    
    for (let i = 0; i < 4; i++) {
        for (let j = 0; j < 4; j++) {
            hourglasses.push(getHourglass(i, j, input));
        }
    }
    const sums = hourglasses.map(item => {
        return item.reduce((acc, cur) => +acc + +cur, 0)
    });

    return Math.max.apply(null, sums);
}

module.exports = getMaxHour;