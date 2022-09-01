/*
  Não altere nada no código, apenas adicione um valor a variável 'resposta'!
  Execute o código e veja se acertou no terminal
  ex: const resposta = 5;
*/
console.clear(); //Irá limpar o terminal para você
const resposta = 10; //insira o valor da final variável 'estudo' aqui
let estudo = 10; // DEFINIÇÃO DE VARIAVEL EM ESCOPO GLOBAL, VALOR NÃO FOI ALTERADO AO LONGO DO ESCOPO
const multiplicador = 2;

if (estudo !== 10) { // VARIAVEL ESTUDO NÃO É FIFERENTE DE 10
  let estudo = 20 // DEFINIÇÃO DE NOVA VARIAVEL EM ESCOPO LOCAL
} else {
  const estudo = 0;
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

