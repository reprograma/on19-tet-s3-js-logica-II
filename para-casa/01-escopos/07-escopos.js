/*
  Don't change anything in the code, just add a value to the 'response' variable!
  Run the code and see if you got it right in the terminal
  ex: const answer = 5;
*/
<<<<<<< HEAD
console.clear(); // Will clear the terminal for you
const answer = 24; //insert the value of the final variable 'study' here
var study = 10; //initially declared with var and initialized with the value 10.
const multiplier = 2;
=======
console.clear(); //Irá limpar o terminal para você
const resposta = 0; //insira o valor da final variável 'estudo' aqui
var estudo = 10;
const multiplicador = 2;
>>>>>>> 80664b6b27e1b9bf25b9ac8f3a2bc56b3ef96a5a

{ //study reassigned, value = 2
  study = 2;
  { //study reassigned, value = 6
    study = 6;
    { //study reassigned, value = 7
      study = 7;
      { // study declared again using var, changing the previously declared variable globally.
        var study = 24;
      }
    }
  }
}

// globally, the value of the variable was changed due to var use, making it study = 24.

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