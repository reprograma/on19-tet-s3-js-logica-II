/*
   Create a program that takes two numbers as ARGUMENTS and prints the mean
   Ex: node .\02-funcoes.js 25 41
*/

//Don't worry about those three lines, we'll learn it next week.

const myArgs = process.argv.slice(2);
const myArgs1 = myArgs[0];
const myArgs2 = myArgs[1];

const calculateMedia = (number1, number2) => { // It is mandatory to use this function with the parameters
  console.log(number1, number2);
}

calculateMedia(myArgs1, myArgs2);

// oops! I already did hehe