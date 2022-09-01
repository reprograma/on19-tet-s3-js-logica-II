/*
  Don't change anything in the code, just add a value to the 'response' variable!
  Run the code and see if you got it right in the terminal
  ex: const answer = 5;
*/
<<<<<<< HEAD
console.clear(); // Will clear the terminal for you
const answer = 20; //insert the value of the final variable 'study' here
let study = 10; //initially declared with let and initialized with the value 10.
const multiplier = 2;
=======
console.clear(); //Irá limpar o terminal para você
const resposta = 0; //insira o valor da final variável 'estudo' aqui
let estudo = 10;
const multiplicador = 2;
>>>>>>> 80664b6b27e1b9bf25b9ac8f3a2bc56b3ef96a5a

// in the arrow function clojure study becomes study = 20.
//in return a new study variable is declared using let, value = 25.
const clojure = () => {
  study = 20;
  return() => {
    let study = 25;
  }
}

const FunctionOfTheFunction = clojure(); // the const FunctionOfTheFunction receives the clojure function and is declared
FunctionOfTheFunction(); //FunctionOfTheFunction is called

// study is worth 20.

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

