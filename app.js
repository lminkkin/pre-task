const persons = Object.freeze([
  //Don't edit this array
  {
    userId: 1,
    name: "Teppo Testaaja",
    dateOfBirth: new Date("1959-01-01"),
    email: "teppo.testaaja@buutti.com",
  },
  {
    userId: 2,
    name: "Tessa Testaaja",
    dateOfBirth: new Date("1981-01-01"),
    email: "tessa.testaaja@buutti.com",
  },
  {
    userId: 3,
    name: "Teuvo Testaaja",
    dateOfBirth: new Date("1989-05-05"),
    email: "teuvo.testaaja@buutti.com",
  },
  {
    userId: 4,
    name: "Outi Ohjelmoija",
    dateOfBirth: new Date("1972-06-06"),
    email: "outi.ohjelmoija@buutti.com",
  },
  {
    userId: 5,
    name: "Olli Ohjelmoija",
    dateOfBirth: new Date("1989-05-05"),
    email: "olli.ohjelmoija@buutti.com",
  },
  {
    userId: 6,
    name: "Teppo Ohjelmoija",
    dateOfBirth: new Date("1980-02-02"),
    email: "teppo.ohjelmoija@buutti.com",
  },
]);
const professions = Object.freeze([
  {
    userId: 1,
    workplace: "Some Company",
    position: "Manager",
  },
  {
    userId: 2,
    workplace: "Epic Company",
    position: "System admin",
  },
  {
    userId: 3,
    workplace: "Some Company",
    position: "Developer",
  },
  {
    userId: 4,
    workplace: "Some Company",
    position: "Manager",
  },

  {
    userId: 5,
    workplace: "Epic Company",
    position: "System admin",
  },
  {
    userId: 6,
    workplace: "Epic company",
    position: "Developer",
  },
]);
const interests = Object.freeze([
  {
    userId: 1,
    interest: "Cats",
  },
  {
    userId: 1,
    interest: "Computers",
  },
  {
    userId: 2,
    interest: "Ice hockey",
  },
  {
    userId: 3,
    interest: "Computers",
  },
  {
    userId: 3,
    interest: "Cats",
  },
  {
    userId: 3,
    interest: "Football",
  },
  {
    userId: 4,
    interest: "Computers",
  },
  {
    userId: 4,
    interest: "Epicness",
  },
  {
    userId: 5,
    interest: "Computers",
  },
  {
    userId: 6,
    interest: "Fishing",
  },
  {
    userId: 6,
    interest: "Cats",
  },
]);
/*
It's enough to make this function work with the
'persons' array above. You don't have to consider or defend
against any other type of names. */
const findByFirstName = (firstname) => {
  const foundPerson = persons.filter(person => person.name.includes(firstname))
  foundPersonNames = foundPerson.map(found => found.name)
  return foundPersonNames;
};
/*
Should return the users age.
Age should be an integer.
findPersonAge("Teuvo Testaaja") returns 31
*/
const findPersonAge = (name) => {
  let found = persons.filter(person => person.name === name)
  const currentDate = new Date()
  const difference = (currentDate - found[0].dateOfBirth)
  const age = Math.floor(difference/31557600000)
  return age;
};
/*


Calculate the average age of all users in the persons array (full
years)
*/
const calculateAverageAge = () => {
  const datesOfBirth = persons.map(person => person.dateOfBirth)
  const getAges = datesOfBirth.map(date =>
                                       Math.floor((new Date() - date)/31557600000)


  )
  const sumOfAges = getAges.reduce((sum, age) => sum + age, 0)
  const averageAge = Math.round(sumOfAges / getAges.length)
  
  return averageAge;
};
/*
Turn the arrays of objects (persons, professions, interests) into a
new object of workplace profiles with employees of the
particular company listed as shown below.
Also include the interests of that particular
employee as a new array in the employeeObject.
Below is an example of how Some Company
profile object should look like:
{
'Some Company': {
employees: [
{
userId: 1,
name: "Teppo Testaaja",
dateOfBirth: 1959-01-01T00:00:00.000Z,
email: "teppo.testaaja@buutti.com",
position: "Manager",
interests: ["Computers", "Cats"]
},
{
userId: 3,
name: "Teuvo Testaaja",
dateOfBirth: 1989-05-05T00:00:00.000Z,
email: "teuvo.testaaja@buutti.com",
position: "Developer",
interests: ["Computers", "Cats", "Football"]
},
{
userId: 4,
name: "Outi Ohjelmoija",
dateOfBirth: 1972-06-06T00:00:00.000Z,
email: "outi.ohjelmoija@buutti.com",

position: "Manager",
interests: ["Computers", "Epicness"]
}
]
},
...
}
*/
const createCompanyProfiles = () => {
  //write your code here
  return [];
};
console.log(
  'All persons with first name "Teppo" are',
  findByFirstName("Teppo")
);
console.log("Calculate Person <name> age", findPersonAge("Teuvo Testaaja"));
console.log("The average age of all persons", calculateAverageAge());
/*console.log("Company profiles created", createCompanyProfiles()); */


