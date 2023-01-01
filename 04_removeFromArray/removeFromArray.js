const removeFromArray = function(array, ...removals) {
    //start an output array
    let newArray = [];

    // loop through every element of array starting with True
    for (let i = 0; i < array.length; i++) {
        let included = false;
        if (! removals.includes(array[i])) {
            newArray.push(array[i]);
        }
    }

    return newArray
};

// Do not edit below this line
module.exports = removeFromArray;
