/*Question 3*/

const prompt = require("prompt-sync")();

console.log("We are going to calculate your weekly wage before and after tax!");

const hourlyWage = parseInt(prompt("Please provide your gross hourly wage: "));
const weeklyHours = parseInt(prompt("How many hours do you work in a given week?: "))

const grossSalary = hourlyWage * weeklyHours;
const netSalary = grossSalary * 0.75;

console.log(`With the information given, your gross weekly salary is ${grossSalary} but your net salary is unfortunately ${netSalary}.`);