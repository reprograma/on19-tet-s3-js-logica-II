/*
   Create a program that uses a function that returns another that calculates the circumference of the circle
   The formula is ==> C = πd (circumference = PI * diameter)
   Ex: node .\02-funcoes.js 10
   print 31.4
*/

//Don't worry about those three lines, we'll learn it next week.
//const myArgs = process.argv.slice(2);
//const myArgs1 = myArgs[0];

const generateFunction = (diameter) => { // It is mandatory to use this function with the parameters
  const PI = 3.14;
    let result = PI * diameter
  return result
 
  //console.log(PI);
}
const calculateCircumference = generateFunction(10);
//calculateCircumference(myArgs1);
console.log(calculateCircumference.toFixed(2))