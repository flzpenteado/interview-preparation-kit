const countingValleys = (s) => {
    const arr = s.split('');
    let level = 0;
    let valleyCount = 0;

    for (let step of arr) {
        if (step === 'U') {
            if (level === -1) valleyCount++;
            level++;
        } else {
            level--;
        }
    }
    return valleyCount;

}

module.exports = countingValleys;