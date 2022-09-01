/*
   Create a program that takes two numbers as ARGUMENTS and prints the mean
   Ex: node .\02-funcoes.js 25 41
*/

//Don't worry about those three lines, we'll learn it next week.
const myArgs = process.argv.slice(2);
const myArgs1 = myArgs[0];
const myArgs2 = myArgs[1];
console.log(myArgs1)

const calculateAverage = (number1, number2) => { // It is mandatory to use this function with the parameters
   let average = (number1 + number2)/2
   console.log(`The average between ${number1} and ${number2} is equal to ${average}`)
   return
  
   //console.log(number1, number2);
}

calculateAverage(5, 9)
calculateAverage(7.5, 10)

//calculateMedia(myArgs1, myArgs2)