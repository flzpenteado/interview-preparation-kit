const sockMerchant = (arr) => {
    const sortedArr = arr.sort();
    let pairs = 0;

    for (i = 0; i < sortedArr.length - 1; i++) {

        if (sortedArr[i] === sortedArr[i + 1]) {
            pairs++;
            i++;
        }
    }

    return pairs;
}

module.exports = sockMerchant;