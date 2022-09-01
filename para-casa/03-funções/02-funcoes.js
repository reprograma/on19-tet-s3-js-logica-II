/*
   Create a function that calculates how many days the user lived, based on age;
   The age must come as the first argument of the command
   The name must come second
   ex: node .\02-funcoes.js 25 Joana
   NOTE: consider 365 days a year, no need to check leap years
*/

//Don't worry about those three lines, we'll learn it next week.
//const myArgs = process.argv.slice(2);
//const myArgs1 = myArgs[0];
//const myArgs2 = myArgs[1];

const calculateLifeDays = (age, name) => { //It is mandatory to use this function with the parameters
  
  let lifeDays = age * 365
  console.log(`${name} has already lived ${lifeDays} days!`)
 
 
  //console.log(age, name);
}

calculateLifeDays(23, "Esposita")
calculateLifeDays(61, "Best friend")
//calculateLifeDays(myArgs1, myArgs2);