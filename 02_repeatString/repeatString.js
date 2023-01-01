const repeatString = function(string, num) {
    if (num < 0) return 'ERROR';
    let output = "";
    let repetitions = 0;
    while (repetitions < num) {
        output = output.concat(string);
        repetitions++;
    }
    return output;
}

// Do not edit below this line
module.exports = repeatString;
