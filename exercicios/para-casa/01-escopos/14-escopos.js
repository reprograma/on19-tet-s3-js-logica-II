/*
  Não altere nada no código, apenas adicione um valor a variável 'resposta'!
  Execute o código e veja se acertou no terminal
  ex: const resposta = 5;
*/
console.clear(); //Irá limpar o terminal para você
const resposta = NaN; //insira o valor da final variável 'estudo' aqui
let estudo = 10; // DEFINIÇÃO DE VARIAVEL EM ESCOPO GLOBAL 
const multiplicador = 2;

estudo = "Olá" / 500; // VARIAVEL PASSA A SER NaN, Not-A-Number PORQUE O RESULTADO DE UMA STRING DIVIDIDA POR UM NÚMERO, NÃO VAI SER UM NÚMERO 
if (Number.isNaN(estudo)) {
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

