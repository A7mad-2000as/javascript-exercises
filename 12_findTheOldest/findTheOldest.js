const findTheOldest = function(people) {
    return people.reduce((oldest, current) => oldest === undefined || getAge(current) > getAge(oldest) ? current : oldest);
};

function getAge(person) {
    if ("yearOfDeath" in person) {
        return person.yearOfDeath - person.yearOfBirth;
    }

    else {
        return (new Date()).getFullYear() - person.yearOfBirth;
    }
}

// Do not edit below this line
module.exports = findTheOldest;
