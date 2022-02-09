const removeFromArray = function(array, ...items) {
    for (item of items) {
        let location = array.indexOf(item);
        if (location >= 0) {
            array.splice(location, 1);
        }
    }

    return array;
};

// Do not edit below this line
module.exports = removeFromArray;
