const add = function(firstNum, secondNum) {
	return firstNum + secondNum;
};

const subtract = function(firstNum, secondNum) {
	return firstNum - secondNum;
};

const sum = function(nums) {
	return nums.reduce((sum, num) => sum += num, 0);
};

const multiply = function(nums) {
  return nums.reduce((answer, num) => answer *= num, 1);
};

const power = function(firstNum, secondNum) {
	return firstNum ** secondNum;
};

const factorial = function(num) {
	let allNums = [...Array(num).keys()].map(num => num + 1); // all nums from 1 to num
  return allNums.reduce((answer, num) => answer *= num, 1);
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
