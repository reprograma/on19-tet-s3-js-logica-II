/*
  Não altere nada no código, apenas adicione um valor a variável 'resposta'!
  Execute o código e veja se acertou no terminal
  ex: const resposta = 5;
*/
console.clear(); //Irá limpar o terminal para você
const resposta = 10; //insira o valor da final variável 'estudo' aqui
let estudo = 10; //inicialmente declarada com let e inicializada com o valor 10.
const multiplicador = 2;

{ // foi declarada uma const estudo inicializada com valor 15
  const estudo = 15;
  { // foi declarada uma nova variável estudo usando let com valor 11
    let estudo = 11;
    estudo = 9; // foi reatribuída com valor 9
    { // estudo recebe novo valor = "Olá!"
      estudo = "Olá!";
    }
  }
}

// aqui no escopo global, estudo permanece inalterado com valor 10. 

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
