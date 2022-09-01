/* Create a program that takes two grades from a student, calculates the average and shows if he passed!
If the grade is greater than or equal to 6, print "Approved"
If the grade is greater than or equal to 5, print "Recovery"
If it is less than the recovery grade, print "Failed"
*/

const { default: test } = require('node:test');

const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

readline.question('\nLet us see if you passed! What is your first grade?\n', grade1 => {
  readline.question('\nWhat is the your second grade?\n', grade2 => {
    let average = ((+grade1) + (+grade2))/2
    if( average >= 6) {
      console.log('Approved. Congratulations. You have passed the test.!')
    } else if (average >= 5) {
      console.log('Recovery. Off to summer school with you.')
    } else {
      console.log('Failed. Good luck, next time.')
    }
    // console.log(grade1, grade2);

    readline.close();
  });
});