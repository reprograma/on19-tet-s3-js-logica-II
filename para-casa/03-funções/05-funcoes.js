/*
   Create a function that calls itself (recursive) to add N numbers
   the first argument is the amount of numbers M
   Ex: node .\05-funcoes.js 5
   1 + 2 + 3 + 4 + 5 = 15 (print 15 to terminal)
*/

//Don't worry about those three lines, we'll learn it next week.
//const myArgs = process.argv.slice(2);
//const myArgs1 = myArgs[0];

const RecursiveFunction = (number1) => { // It is mandatory to use this function with the parameters
  console.log(number1);
  if(number1 <= 1)
    return number1
  return number1 + recursivefunction(number1 - 1)
}

console.log(RecursiveFunction(5))

//RecursiveFunction(myArgs1);