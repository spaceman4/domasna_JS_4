//1. Create person object with properties firstName and lastName and add coresponding values.

let person = {
  firstName: "Martin",
  lastName: "Zlateski",
};

//2. Print the values of the properties of the object. Use both approaches.

console.log(person["firstName"]);
console.log(person["lastName"]);
console.log(person.firstName);
console.log(person.lastName);

//3. Print the whole firstName and lastName of the person.

console.log(person.lastName + ", " + person.firstName);

//4.Add the property age and coresponding value to the person object. Use both approaches.

person.age = 28;
person["age"] = 28;

//5. Print how old the person is.

console.log(person.age);

//6.Find the type of the variable person.

console.log(typeof person);

//7.Create another person object. Populate the object with coresponding values.

let anotherperson = {
  firstName: "Nikola",
  lastName: "Gruevski",
  age: 50,
};

//8. Find out which person is older.

if (person.age > anotherperson.age) {
  console.log("person is older than anotherperson");
} else if (anotherperson.age > person.age) {
  console.log("anotherpeson is older than person");
} else {
  console.log("person and anotherperson have the same age");
}

//9. Find out how many years the person1 is older/younger from person2.

let ageDiff;

if (person.age > anotherperson.age) {
  ageDiff = person.age - anotherperson.age;
  console.log(
    person.firstName +
      " is " +
      ageDiff +
      " years older than " +
      anotherperson.firstName
  );
} else if (person.age < anotherperson.age) {
  ageDiff = anotherperson.age - person.age;
  console.log(
    person.firstName +
      " is " +
      ageDiff +
      " years younger than " +
      anotherperson.firstName
  );
} else {
  console.log("they have the same age");
}

//10. Create another peson object. Populate the object with coresponding values.

let thirdperson = {
  firstName: "Zoran",
  lastName: "Zaev",
  age: 46,
};

//11.Find the sum of the years of the people.

let ageSum = person.age + anotherperson.age + thirdperson.age;

console.log(ageSum);

//12. Find the average of the years of the people.

let ageAvg = ageSum / 3;

console.log(ageAvg);

//13. Find out who is the youngest of all three people.

let young, middle, old;

young = Math.min(person.age, anotherperson.age, thirdperson.age);

console.log("The youngest person is " + young);

old = Math.max(person.age, anotherperson.age, thirdperson.age);

console.log("The oldest person is " + old);

middle =
  person.age +
  anotherperson.age +
  thirdperson.age -
  Math.min(person.age, anotherperson.age, thirdperson.age) -
  Math.max(person.age, anotherperson.age, thirdperson.age);

console.log("The middle person is " + middle);
