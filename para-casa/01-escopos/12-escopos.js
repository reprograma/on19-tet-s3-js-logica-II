/*
  Don't change anything in the code, just add a value to the 'response' variable!
  Run the code and see if you got it right in the terminal
  ex: const answer = 5;
*/
<<<<<<< HEAD
console.clear(); // Will clear the terminal for you
const answer = 10; //insert the value of the final variable 'study' here
let study = 10; //let study declared and initialized with value = 10.
const multiplier = 2;
=======
console.clear(); //Irá limpar o terminal para você
const resposta = 0; //insira o valor da final variável 'estudo' aqui
let estudo = 10;
const multiplicador = 2;
>>>>>>> 80664b6b27e1b9bf25b9ac8f3a2bc56b3ef96a5a

// arrow function has been declared and takes a value as a parameter

const test = (value) => {
  if (value === 5) {
    let study = 11;
  } else {
    study = 44;
  }
}
// a new study variable was declared using let, inside the block, initialized with value = 5.
// test function was called receiving study as a parameter (5).
// inside the function the if condition returns true, as 5 === 5. New variable declared with let and initialized with 11.
{
  let study = 5;
  test(study);
}

// globally, study remains 10. 

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

