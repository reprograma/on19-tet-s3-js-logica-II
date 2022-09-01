/*
  Não altere nada no código, apenas adicione um valor a variável 'resposta'!
  Execute o código e veja se acertou no terminal
  ex: const resposta = 5;
*/
console.clear(); //Irá limpar o terminal para você

//ESCOPO GLOBAL
const resposta = 1; //insira o valor da final variável 'estudo' aqui
let estudo = 10;
const multiplicador = 2;

estudo = 1;

//ESCOPO LOCAL 
{
  let estudo = multiplicador; //2

  estudo = estudo - multiplicador; // 2 - 2 = 0
  //console.log(estudo) // SE EU DER UM CONSOLE  DENTRO DESSE ESCOPO A RESPOSTA  PODERIA SER  "0"
}

// CONDIÇÕES 
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
