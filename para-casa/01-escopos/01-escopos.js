/*
  Don't change anything in the code, just add a value to the 'response' variable!
  Run the code and see if you got it right in the terminal
  ex: const answer = 5;
*/
<<<<<<< HEAD
console.clear(); // Will clear the terminal for you
const answer = 6; //insert the value of the final variable 'study' here
let study = 10; //initially declared with let and initialized with the value 10.
const multiplier = 2;
=======
console.clear(); //Irá limpar o terminal para você
const resposta = 0; //insira o valor da final variável 'estudo' aqui
let estudo = 10;
const multiplicador = 2;
>>>>>>> 80664b6b27e1b9bf25b9ac8f3a2bc56b3ef96a5a

study = 1;
// reassigned with value 1
study = multiplier * study;
// assigned multiplier 2 * 1 (study = 2)
study = study * study / study;
// reassigned with 2 * 2 / 2 (study = 2)
study = study - multiplier;
// study 2 - 2 = (study = 0)
study += 2;
// study itself + 2 = (study = 2)
study /= 2;
// study receives itself divided by 2 = (study = 1)
study = 6;
// study is reassigned = (study = 6)
// variables declared with var and let allow reassignment of values, so study received several values ​​throughout the code.
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