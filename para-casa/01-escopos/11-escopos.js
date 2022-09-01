/*
  Don't change anything in the code, just add a value to the 'response' variable!
  Run the code and see if you got it right in the terminal
  ex: const answer = 5;
*/
<<<<<<< HEAD
console.clear(); // Will clear the terminal for you
const answer = 44; //insert the value of the final variable 'study' here
let study = 10; //let study declared and initialized with value = 10.
const multiplier = 2;
=======
console.clear(); //Irá limpar o terminal para você
const resposta = 0; //insira o valor da final variável 'estudo' aqui
let estudo = 10;
const multiplicador = 2;
>>>>>>> 80664b6b27e1b9bf25b9ac8f3a2bc56b3ef96a5a

// the arrow function receives a value as a parameter that will be used inside this if block.
const test = (value) => {
  if (value === 5) {
    let study = 11;
  } else {
    study = 44;
  }
}
// first call, if condition returns false and the flow goes to else, changing the study value to 44.
// second call, if condition returns true and a new study variable is declared and initialized with value 11.

test(7); // 44
test(5);

if (study === answer) {
  console.log("\nYou got it right!\n");
} else {
  console.log("\nTry again!\n");
}

/*
  Can you justify your answer?
  Comment the code how the values ​​were manipulated
  ex:
  let study = 1 //here the assignment was made in the global scope
*/

