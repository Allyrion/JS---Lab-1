
/*Question 1*/

const prompt = require("prompt-sync")();

console.log("We're going to calculate the sum of two numbers.");
const firstNumber = parseInt(prompt("Please enter the first number:"));
const secondNumber = parseInt(prompt("Please enter the second number:"));

const sum = firstNumber + secondNumber;

console.log(`The sum of the two given numbers is ${sum}`);