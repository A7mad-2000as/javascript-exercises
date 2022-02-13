const fibonacci = function(num) {
    if (num < 0) {
        return "OOPS";
    }
    
    let first = 1;
    let second = 1;
    for (let seq = 3; seq <= num; seq++) {
        let current = first + second;
        second = first;
        first = current;
    }

    return first;
};



// Do not edit below this line
module.exports = fibonacci;
