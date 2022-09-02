/*
  Não altere nada no código, apenas adicione um valor a variável 'resposta'!
  Execute o código e veja se acertou no terminal
  ex: const resposta = 5;
*/
console.clear(); //Irá limpar o terminal para você
<<<<<<< HEAD
const resposta = 1; //insira o valor da final variável 'estudo' aqui
let estudo = 10; // variável estudo recebe valor global 10.
const multiplicador = 2; // variável multiplicador recebe valor constante 2.


estudo = 1;// variável estudo tem valor global alterado e passa a valer 1.
=======
const resposta = 0; //insira o valor da final variável 'estudo' aqui
let estudo = 10;
const multiplicador = 2;
>>>>>>> 80664b6b27e1b9bf25b9ac8f3a2bc56b3ef96a5a


{
  let estudo = multiplicador;// é criada nova variável estudo tem valor igual ao multiplicador.

  estudo = estudo - multiplicador;//variável estudo passa a valer 0.
}


if (estudo === resposta) {
  console.log("\nVocê acertou!\n");
} else {
  console.log("\nTente de novo!\n");
}

// varaiável estudo recebe valor global de 1, alterando assim o valor inicial que antes era 10.Por isso resultado positivo.
/*
  Você consegue justificar sua resposta?
  Comente o código como foi a manipulação dos valores
  ex:
  let estudo = 1 //aqui foi feita a atribuição no escopo global
*/
