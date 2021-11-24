/*Question 6*/

const prompt = require("prompt-sync")();

console.log("This program will display details of a discounted item when given certain information.");

const itemTitle = prompt("Please provide the item name: ");
const itemNo = parseInt(prompt("Please provide the item number: "));
const itemCost = parseInt(prompt("Please provide the original item price: "));
const discountPercent = parseInt(prompt("Please provide the discounted percent off the item: "));

const discountAmt = itemCost * (discountPercent / 100);
const discountedPrice = itemCost - discountAmt;

console.log(`The original price of the item, ${itemTitle}, is ${itemCost}.
However with the current discount, you save ${discountAmt}!
The current cost is now ${discountedPrice}.`);