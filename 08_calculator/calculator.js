const add = function(num1, num2) {
	return num1 + num2;
};

const subtract = (num1, num2) => { return (num1 - num2)};

const sum = function(arr) {
  return arr.reduce((acc, current) => acc + current, 0);
}

const multiply = function multiply(arr) {
  return arr.reduce((acc, current) => acc * current, 1);
}

const power = (num1, num2) => { return num1 ** num2};

const factorial = function(n) {
	let result = 1;
  for (let i = 1; i <= n; i++) {
    result *= i;
  }
  return result;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
