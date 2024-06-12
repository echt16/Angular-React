let parser = function (path) {
    const fs = require('fs');

    let str = fs.readFileSync(path, 'utf8');

    const charCount = {};

    for (let char of str) {
        if (charCount[char]) {
            charCount[char]++;
        } else {
            charCount[char] = 1;
        }
    }

    return charCount;
}

module.exports.parser = parser;