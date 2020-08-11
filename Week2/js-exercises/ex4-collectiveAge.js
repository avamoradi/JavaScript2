/**
 
 ** Exercise 4: Collective age **
 
 Have you ever wondered how old the HackYourFuture team members are ? Or better yet : what the collective age is ? Let 's find out!

 Write a function that calculates the combined age of every member
 Avoid using for loop or forEach.
 */

 
function collectiveMembers(hyfMembers, callback) {
  var mappedArray = hyfMembers.map(hyfObject => hyfObject.age);
  return callback(mappedArray);
}

function collectiveAge(people) {
  // return the sum of age for all the people
  var sumAge = people.reduce((total, age) => total + age , 0);
  return sumAge;
}

const hackYourFutureMembers = [{
    name: 'Wouter',
    age: 33
  },
  {
    name: 'Federico',
    age: 32
  },
  {
    name: 'Noer',
    age: 27
  },
  {
    name: 'Tjebbe',
    age: 22
  },
];

console.log(`The collective age of the HYF team is: ${collectiveMembers(hackYourFutureMembers, collectiveAge)}`);
