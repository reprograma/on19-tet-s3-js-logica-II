/*
   The user sends any number (remember that it comes as a string)
   Print if the number is odd or even
   ex: 1 ==> odd
*/

const readline = require('readline').createInterface({
   input: process.stdin,
   output: process.stdout
});

readline.question('\nSay the number and I will ll tell you if it is an odd or even number!\n', number => {
   if(+number % 2 === 0) { // If what remains of the division is equal to 0, it is even. Otherwise it is odd.
     console.log("The number is even!")
   } else {
     console.log("The number is odd!")
   }
   console.log(number);

   readline.close();
});

readline.on('close', () => {
   console.log('\nThanks for playing!');
   process.exit(0);
});