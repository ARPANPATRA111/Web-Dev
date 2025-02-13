// Basic Calculator Demo
// Try modifying these values and running the code!

// Variables with different data types
/* Use let when value needs to change and const when value is fixed */
const a = 99; 
let number = 42;
let text = "Hello, World!";
let isAdmin = true;
let scores = [90, 85, 95];
let person = { name: "John", age: 30 };

// Basic arithmetic operations
console.log("Arithmetic Operations:");
console.log("5 + 3 =", 5 + 3);
console.log("10 - 4 =", 10 - 4);
console.log("6 * 2 =", 6 * 2);
console.log("15 / 3 =", 15 / 3);

// Working with variables
console.log("\nWorking with Variables:");
console.log("Number:", number);
number += 10;  // Add 10 to number
console.log("Updated number:", number);

// String concatenation
console.log("\nString Operations:");
console.log(text + " How are you?");
console.log(`${text} Your score is ${scores[0]}`);

// Conditional logic
console.log("\nConditional Logic:");
if (isAdmin) {
    console.log("Welcome, Admin!");
} else {
    console.log("Welcome, User!");
}

// Arrays and Objects
console.log("\nArrays and Objects:");
console.log("First score:", scores[0]);
person.age += 1;
console.log("Person's age:", person.age);