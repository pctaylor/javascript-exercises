function posInt(num) {
    return Number.isInteger(num) & num >= 0;
}

const sumAll = function(num1, num2) {
    if (posInt(num1)==1 & posInt(num2)==1) {
        let start = Math.min(num1, num2);
        let finish = Math.max(num1, num2);
        let runningSum = 0;

        for (let i = start; i <= finish; i++) {
            runningSum += i;
        }
        return runningSum;
    }
    else {
        return "ERROR";
    }
};

// Do not edit below this line
module.exports = sumAll;
