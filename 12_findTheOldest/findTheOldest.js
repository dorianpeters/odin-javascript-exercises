const findTheOldest = function(people) {
  people.forEach(person => {
    if (person.yearOfDeath === undefined) {
      const today = new Date();
      person.age = today.getFullYear() - person.yearOfBirth;
    } else {
      person.age = person.yearOfDeath - person.yearOfBirth;
    }
  });
  people.sort((a,b) => b.age - a.age);
  delete people[0].age;
  return people[0];
};


// Do not edit below this line
module.exports = findTheOldest;
