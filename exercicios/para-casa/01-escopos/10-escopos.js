/*
  Não altere nada no código, apenas adicione um valor a variável 'resposta'!
  Execute o código e veja se acertou no terminal
  ex: const resposta = 5;
*/
console.clear(); //Irá limpar o terminal para você
<<<<<<< HEAD
const resposta = 10; //insira o valor da final variável 'estudo' aqui
let estudo = 10; // variável estudo recebe valor global 10
const multiplicador = 2;//variável multiplicador recebe valor global constante 2.
=======
const resposta = 0; //insira o valor da final variável 'estudo' aqui
let estudo = 10;
const multiplicador = 2;
>>>>>>> 80664b6b27e1b9bf25b9ac8f3a2bc56b3ef96a5a

if (estudo !== 10) { // se estudo for diferente de 10, a variável recebe valor de 20.
  let estudo = 20
} else { // senão 
  const estudo = 0; // será criada variável constante valendo zero
}

//como a variável não foi alterada em nenhuma condição, o valor é igual a resoosta o que satisfaz a condição abaixo.
if (estudo === resposta) {
  console.log("\nVocê acertou!\n");
} else {
  console.log("\nTente de novo!\n");
}

/*
  Você consegue justificar sua resposta?
  Comente o código como foi a manipulação dos valores
  ex:
  let estudo = 1 //aqui foi feita a atribuição no escopo global
*/

