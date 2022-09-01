/*
   The user will guess a number.
   Print a nice message when he hits the number 7
   print that he missed if he guessed any other number
*/

const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

readline.question('\nGuess a number from one to ten!\n', guess => {
  if (+guess === 7) { // it was necessary to implement the proper condition to print the messages.
    console.log(`Congratulations! You guessed the right number: ${guess}`);
  } else {
    console.log("error")
  }
 

  readline.close();
});

readline.on('close', () => {
  console.log('\nThanks for playing!');
  process.exit(0);
});