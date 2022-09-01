/*
  The user's age (remember that it comes as a string) and whether or not he is a student;
  Print that he is entitled to half price if he is a minor or a student.
  ex: "Cool, you're entitled to half price" or "Too bad, you're not entitled to that"
*/

const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

readline.question('\nHow old are you?\n', age => {
  readline.question('\nAre you a student? (Yes, No)\n', student => {
    if(age < 18 || student.toUpperCase === "Yes") { // suitable condition to cover both cases. toUpperCase used to validate the comparison.
      console.log("Maria, you are entitled to half entry! Enjoy.")
    } else {
      console.log("No half-entry for you. Sorry.")
    }
    //console.log(age, student);

    readline.close();
  });
});

readline.on('close', () => {
  console.log('\nGood movie!');
  process.exit(0);
});
