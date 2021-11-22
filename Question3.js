/*Question 3*/

const prompt = require("prompt-sync")();

console.log("This program will calculate the area and perimeter of a rectangle, given its length and width.")
const length = parseInt(prompt("Please enter the length of the rectangle: "));
const width = parseInt(prompt("Please enter the width of the rectangle: "));

const area = length * width;
const perimeter = 2 * (length+width);

console.log(`The area of the rectangle is ${area} and its perimeter is ${perimeter}.`);