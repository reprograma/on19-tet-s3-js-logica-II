/*
   User sends a number from 1 to 7
   Print which day of the week corresponds to the number
   ex: 1 ==> Sunday
*/

const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

readline.question('\nSay a number from 1 to 7 and I will tell you the day of the week it corresponds to!\n', day => {
  switch(day){
    case '1':
      day = "Sunday"
      break
    case '2':
      day = "Monday"
      break
    case '3':
      day = "Tuesday"
      break
    case '3':
      day = "Wednesday"
      break
    case '4':
      day = "Thursday"
      break
    case '5':
      day = "Friday"
        break
    case '6':
      day = "Saturday"
        break
    default:
        console.log("Invalid day")

  }
console.log(day);

readline.close();
});

readline.on('close', () => {
  console.log('\nThank you for coming!');
  process.exit(0);
});