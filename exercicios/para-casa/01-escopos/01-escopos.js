/*
  Não altere nada no código, apenas adicione um valor a variável 'resposta'!
  Execute o código e veja se acertou no terminal
  ex: const resposta = 5;
*/
console.clear(); //Irá limpar o terminal para você
const resposta = 6; //insira o valor da final variável 'estudo' aqui
let estudo = 10;
const multiplicador = 2;

estudo = 1; // reatribui o valor da let da linha 8

estudo = multiplicador * estudo; // aqui multiplicou 2 * 1 = 2 
console.log(estudo)

estudo = estudo * estudo / estudo; // estudo passou a valer 2 (linha 13). (2 * 2) / 2 = 2
console.log(estudo)

estudo = estudo - multiplicador; // estudo passou a valer 2 (linha 16). 2 - 2 = 0
console.log(estudo)

estudo += 2; // 0 + 2 = 2
console.log (estudo)

estudo /= 2; // 2 / 2 = 1
console.log(estudo)

estudo = 6;

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
