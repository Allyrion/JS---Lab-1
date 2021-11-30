/*Question =8*/

const prompt = require("prompt-sync")();

const userName = prompt("Hi, what's your name? ");
console.log(`Welcome to our show, ${userName}!`);
let age = prompt("How old are you? ");

if (isNaN(age) === true) {
    console.log("Sorry, you did not enter a valid number.");
}
else {
    let userAge = parseInt(age);
    const mamaguyAgeDown = userAge - 5;
    const mamaguyAgeUp = userAge + 5;

    if (userAge < 1) {
    console.log("Sorry, your age cannot be zero or a negative number!");
    }
    else if (userAge < 10) {
        console.log("Sorry, you must be older to proceed");
    }
    else if (userAge >= 10 && userAge < 23) {
        console.log(`Wow, you seem quite mature! I thought you were ${mamaguyAgeUp}!`);
    }
    else {
        console.log(`Wow, you look quite young for your age! I thought you were ${mamaguyAgeDown}!`);
    }
}