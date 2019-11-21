const jumpingOnTheClouds = (c) => {

    let jumps = 0;
    let currentCloud = 0;
    let i = 0;


    for (i = 0; i < c.length; i++) {
        if (i <= currentCloud) continue;

        if (c[currentCloud + 2] === 0) {
            currentCloud += 2;
        } else {
            currentCloud++;
        }
        jumps++;

    }

    return jumps;
}

module.exports = jumpingOnTheClouds;