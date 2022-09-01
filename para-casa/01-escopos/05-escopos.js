/*
  Don't change anything in the code, just add a value to the 'response' variable!
  Run the code and see if you got it right in the terminal
  ex: const answer = 5;
*/
<<<<<<< HEAD
console.clear(); // Will clear the terminal for you
const answer = 3; //insert the value of the final variable 'study' here
let study = 10; //initially declared with let and initialized with the value 10.
const multiplier = 2;
=======
console.clear(); //Irá limpar o terminal para você
const resposta = 0; //insira o valor da final variável 'estudo' aqui
let estudo = 10;
const multiplicador = 2;
>>>>>>> 80664b6b27e1b9bf25b9ac8f3a2bc56b3ef96a5a

{ //new study declaration, value = 3.
  let study = 3;
}

{ //new study declaration, receiving values 6 and 0.
  let study = 6;
  study = 0;
}

{ // within the block, it was reassigned with value 3.
  study = 3;
  { // new declaration containing "Hello!"
    let study = "Hello!";
  }
}

// last value assigned to study was 3.

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