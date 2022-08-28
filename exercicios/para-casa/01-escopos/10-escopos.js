/*
  Não altere nada no código, apenas adicione um valor a variável 'resposta'!
  Execute o código e veja se acertou no terminal
  ex: const resposta = 5;
*/
console.clear(); //Irá limpar o terminal para você
const resposta = 10; //insira o valor da final variável 'estudo' aqui
let estudo = 10; //inicialmente declarada com let e inicializada com o valor 10.
const multiplicador = 2;


// a condição do if não é verdadeira, o que conduz o fluxo ao else - onde uma nova const é declarada - inicializada com valor 0. 
if (estudo !== 10) {
  let estudo = 20
} else {
  const estudo = 0;
}

// estudo permanece com valor de 10 no escopo global. 

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

