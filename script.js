// 1. Create a variable with the name `name` and assign a value of 'John' to it.
let name = "John";
var parentname = "Wick"; // Capitalized the first letter of the name for consistency.
const parentage = 30;
console.log(name, parentname, parentage);

// String and All Operations on String

let greeting = "Hello " + name;
console.log(greeting);

// Templating String
let greetingTemplate = `Hello ${name}`;
console.log(greetingTemplate);

// String Length
console.log(name.length);

// Accessing String Characters
console.log(name[0]);

// 2. Creating if else statement
let age = 30;
if (age > 18) {
  console.log("You are an adult");
} else {
  console.log("You are a minor");
}

// 3. Creating an array
let fruits = ["Apple", "Banana", "Mango", "Orange", "Pineapple"];
console.log(fruits);

// 4. Operation on array
console.log(fruits.length);
console.log(fruits[0]);
console.log(fruits[fruits.length - 1]);

// 5. Adding and removing elements from array
fruits.push("Grapes"); // Adds 'Grapes' to the end of the array.
fruits.pop(); // Removes the last element (Pineapple).
fruits.shift(); // Removes the first element (Apple).
fruits.unshift("Kiwi"); // Adds 'Kiwi' to the beginning of the array.
console.log(fruits); // Log the array after modifications

// 6. Looping through array
for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}

// 7. Creating an object
let person = {
  name: "John",
  age: 30,
  city: "New York",
};
console.log(person);

// 8. Accessing object properties and methods
console.log(person.name);
console.log(person.age);

// 9. Creating a function
function greet(name) {
  console.log("Hello " + name);
}
greet("John");

// 11. Function with multiple parameters
function greetWithAge(name, age) {
  console.log("Hello " + name + ", you are " + age + " years old");
}
greetWithAge("John", 30);

// 12. Returning a value from a function
function add(a, b) {
  return a + b;
}
let sum = add(2, 3);
console.log(sum);

// 13. Arrow function
const addArrow = (a, b) => {
  return a + b;
};
let arrowSum = addArrow(2, 3);
console.log(arrowSum);

// 14. Arrow function with one parameter
const greetArrow = (name) => {
  console.log("Hello " + name);
};
greetArrow("John");

// Higher Order Functions in JavaScript
// 15. forEach
fruits.forEach((fruit) => {
  console.log(fruit);
});

// 16. map
let numbers = [1, 2, 3, 4, 5];
let doubledNumbers = numbers.map((number) => number * 2); // Simplified return statement
console.log(doubledNumbers);

// 17. filter
let evenNumbers = numbers.filter((number) => number % 2 === 0);
console.log(evenNumbers);

// 18. find
let firstEvenNumber = numbers.find((number) => number % 2 === 0);
console.log(firstEvenNumber);

// 19. reduce
let sumOfNumbers = numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
console.log(sumOfNumbers);

// 20. some
let hasEvenNumber = numbers.some((number) => number % 2 === 0);
console.log(hasEvenNumber);

// 21. every
let allEvenNumbers = numbers.every((number) => number % 2 === 0);
console.log(allEvenNumbers);

// 22. And Or Operator in JavaScript
let isAdult = true;
let isStudent = false;
if (isAdult && isStudent) {
  console.log("You are an adult student");
}
if (isAdult || isStudent) {
  console.log("You are either an adult or a student");
}

// 23. Ternary Operator
let Student = true;
let message = Student ? "You are a student" : "You are not a student";
console.log(message);

// 24. Switch Case
let day = "Monday";
switch (day) {
  case "Monday":
    console.log("Today is Monday");
    break;
  case "Tuesday":
    console.log("Today is Tuesday");
    break;
  default:
    console.log("Invalid day");
}

// 25. While Loop
let i = 0;
while (i < 5) {
  console.log(i);
  i++;
}

// 26. Do While Loop
i = 0; // Reset i before the do-while loop
do {
  console.log(i);
  i++;
} while (i < 5);

// 27. For Loop
for (let i = 0; i < 5; i++) {
  console.log(i);
}

// 28. Break Statement
for (let i = 0; i < 5; i++) {
  if (i === 3) {
    break;
  }
  console.log(i);
}

// 29. Continue Statement
for (let i = 0; i < 5; i++) {
  if (i === 3) {
    continue;
  }
  console.log(i);
}
