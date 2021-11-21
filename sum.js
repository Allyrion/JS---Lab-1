// Single line comments

/* 
    Multi-line comments
*/

// Library import
const prompt = require("prompt-sync")();



// Prompt and read a numbder from the keyboard

let num1 = parseInt(prompt("Please enter a number: "));

let num2 = parseInt(prompt("Please enter another number: "));

let sum = num1 + num2;

console.log(sum);