/*
   Without creating new ifs or elses and without changing the value of variables,
   correct the conditions to achieve the desired result!
   Should result in 'You got it right' in the terminal
*/
console.clear(); // Will clear the terminal for you


// Give half entry to non-adults
let adult = false;
let inputValue = 10;
let InputHalfValue;

if (!adult) { // edit here only
   inputHalfValue = inputValue / 2;
}

if (inputHalfValue === 5) {
   console.log("\nYou got it right!\n");
} else {
   console.log("\nTry again!\n");
}

// edited the NOT operator (!), value converted from true to false.

/*
   Can you justify your answer?
   Comment the code how the values were manipulated
   ex:
   if (study !== answer) { //the variables must be different to enter the if
*/