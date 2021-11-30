/*Question =8*/

const prompt = require("prompt-sync")();

console.log("Welcome! Thank you for using this loan calculator!");

const loanAmt = parseInt(prompt("Please enter the loan amount: "));
const apr = parseInt(prompt("Please enter the Annual Interest Rate: "));
const loanTermInYears = parseInt(prompt("Please enter the loan term in years: "));

const loanTerm = loanTermInYears * 12
const monthlyInt = (apr / 100) / 12;
const monthlyIntTemp = monthlyInt + 1;
const monthlyRaise = Math.pow(monthlyIntTemp, -loanTerm);
const monthlyIntRate = 1 - (monthlyRaise);

const monthlyIntAmt = loanAmt * monthlyInt;
const monthlyPayment = monthlyIntAmt / monthlyIntRate;

console.log (`Your loan amount is ${loanAmt}.
Your Annual Interest Rate is ${apr}.
Your loan term is ${loanTerm} months.
Thus, your monthly payment amounts to ${monthlyPayment}.
Thank you for using this program!`);