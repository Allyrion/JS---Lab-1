/*Question 5*/

const prompt = require("prompt-sync")();

console.log("This program will calculate your weekly gross salary and net salary with added commissions");

const baseSalary = parseInt(prompt("Please provide your base monthly salary: "));
const commission = parseInt(prompt("What is the total amount of sales you earned for the month?: "));

const baseWeekly = baseSalary / 4;
const weeklyComm = (commission * 0.2) / 4;

const grossSalary = baseWeekly + weeklyComm;
const netSalary = grossSalary * 0.75;

console.log(`Your weekly gross salary is ${grossSalary} while your weekly net salary is ${netSalary}.`);