/*
  Não altere nada no código, apenas adicione um valor a variável 'resposta'!
  Execute o código e veja se acertou no terminal
  ex: const resposta = 5;
*/
console.clear(); //Irá limpar o terminal para você
<<<<<<< HEAD
const resposta = 10; //insira o valor da final variável 'estudo' aqui
let estudo = 10; // variável estudo recebe valor global 10.
const multiplicador = 2; // variável multiplicador recebe valor global constante 2.
=======
const resposta = 0; //insira o valor da final variável 'estudo' aqui
let estudo = 10;
const multiplicador = 2;
>>>>>>> 80664b6b27e1b9bf25b9ac8f3a2bc56b3ef96a5a

{
  const estudo = 15; // foi criada outra variavel estudo dentro deste escopo com valor inicial de 15
  {
    let estudo = 11; // foi criada mais uma variavel estudo dentro deste escopo com valor de 11.
    estudo = 9; // valor da variável criada anteriormente passa a ser 9.
     {
      estudo = "Olá!"; // recebe uma instring como atribuição.
     }
  }
  
}
// como exixtem varios escopos, o valor da variável estudo será diferente.
// o valor considerado para a condição abaixo levou em conta o valor global, já que não sofreu alteração.

if (estudo === resposta) {
  console.log("\nVocê acertou!\n");
} else {
  console.log("\nTente de novo!\n");
}
 console.log(estudo);
/*
  Você consegue justificar sua resposta?
  Comente o código como foi a manipulação dos valores
  ex:
  let estudo = 1 //aqui foi feita a atribuição no escopo global
*/
