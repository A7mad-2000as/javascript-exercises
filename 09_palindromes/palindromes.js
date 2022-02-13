const palindromes = function (string) {
    string = string.toUpperCase();
    const charArray = string.split("");
    const filteredCharArray = charArray.filter(char => char >= "A" && char <= "Z");
    
    return filteredCharArray.slice().reverse().join("") === filteredCharArray.join("");
};

palindromes("ZZZZ car, a man, a maraca.");

// Do not edit below this line
module.exports = palindromes;
