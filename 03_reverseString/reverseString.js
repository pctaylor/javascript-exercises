const reverseString = function(string) {
    //create new string to output
    let output = ""

    //iterate backwards through string and add it to the output
    for (let i = string.length - 1; i >= 0; i--) {
        output = output.concat(string[i]);
    }

    //return output
    return output

};

// Do not edit below this line
module.exports = reverseString;
