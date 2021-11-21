/*Question 2*/

const prompt = require("prompt-sync")();

console.log("We are going to calculate both the area and the circumference of a circle given the radius!");
const radius = parseInt(prompt("Please give us the radius: "));
const pi = Math.PI;

const area = pi * (radius**2);

const circumference = 2 * pi * radius;

console.log(`The area of the circle is ${area} and the circumference is ${circumference}`);