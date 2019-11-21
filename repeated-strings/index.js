const repeatedString = (s, n) => {

    const counter = (str) => (str.match(/a/g) || []).length;

    const times = Math.trunc(n / s.length);

    const remainderString = s.substring(0, n % s.length);

    return (times * counter(s)) + counter(remainderString);
}

module.exports =  repeatedString;