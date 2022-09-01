/*
  Não altere nada no código, apenas adicione um valor a variável 'resposta'!
  Execute o código e veja se acertou no terminal
  ex: const resposta = 5;
*/

console.clear(); //Irá limpar o terminal para você
const resposta = 1; //insira o valor da final variável 'estudo' aqui
let estudo = 10;
console.log(estudo)
const multiplicador = 2;

estudo = 1; // reatribuiu o valor da variavel da linha 9, aqui é varivel global
console.log(estudo)

{
  let estudo = multiplicador; // aqui o valor o estudo é o valor atribuido a variavel multilpilcador da linha 11, ou seja, 2.
  console.log(estudo)

  estudo = estudo - multiplicador; // 2-2 = 0. 
  console.log(estudo)

  // aqui está entre {} não consigo acessar de fora
}


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
