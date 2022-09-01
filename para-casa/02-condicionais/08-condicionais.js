/*
   The user will send 3 numbers, calculate the average of them (remember that it comes as a string)
   print the average
   ex: 2, 3, 4 ==> 3
*/

const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

readline.question('\nLet us calculate the average of 3 numbers, enter the first one:\n', n1 => {
  readline.question('\nSecond number:\n', n2 => {
    readline.question('\nThird number\n', n3 => {
     
        let media = ((+n1) + (+n2) + (+n3))/3 // converted string variables to number to be able to calculate the average.
        console.log(media.toFixed(2))

      //console.log(n1, n2, n3);
    
     

      readline.close();
    });
  });
});

readline.on('close', () => {
  console.log('\nThank you for using this calculator!');
  process.exit(0);
});