/*Question 6*/

const prompt = require("prompt-sync")();

console.log("This program will your weight from kilograms to pounds.");

const userName = prompt("Please provide your name: ");
const userWeight = parseInt(prompt("Please provide your weight in kilograms: "));
const weightInLbs = userWeight * 2.2;

console.log(`Hello, ${userName}! Your weight in lbs is ${weightInLbs}.`);