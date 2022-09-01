/*
  Without creating new ifs or elses and without changing the value of variables,
  correct the conditions to achieve the desired result!
  Should result in 'You got it right' in the terminal
*/
console.clear(); // Will clear the terminal for you

let inputValue = 10;
let InputHalfValue;

//Person 1: adult, student, half price
let adult = true;
let student = true;
const conditional = () => student && adult; // <=== just edit here
if (conditional()) {
  inputHalfValue = inputValue / 2;
} else {
  inputHalfValue = inputValue;
}

if (inputHalfValue === 5) {
  console.log("\nYou got it right!\n");
} else {
  console.log("\nTry again!\n");
}

// changed operator to &&, as to return student and adult.

//Person 2, adult, not a student, deny half entry
adult = true;
student = false;
if (conditional()) {
  inputHalfValue = inputValue / 2;
} else {
  inputHalfValue = inputValue;
}

if (inputHalfValue === 10) {
  console.log("\n%You got it right!\n", "color: green");
} else {
  console.log("%cTry again!", "color: #000");
}

/*
  Can you justify your answer?
  Comment the code how the values ​​were manipulated
  ex:
  if (study !== answer) { //the variables must be different to enter the if
*/