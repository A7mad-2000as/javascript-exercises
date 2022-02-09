const sumAll = function(firstNumber, secondNumber) {
    if (firstNumber < 0 || secondNumber < 0 || typeof firstNumber !== "number" || typeof secondNumber !== "number") {
        return "ERROR";
    }

    let sum = 0;

    for (let i = Math.min(firstNumber, secondNumber); i <= Math.max(firstNumber, secondNumber); i++) {
        sum += i;
    }

    return sum;
};

// Do not edit below this line
module.exports = sumAll;
