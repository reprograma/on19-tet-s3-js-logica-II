/*
  Não altere nada no código, apenas adicione um valor a variável 'resposta'!
  Execute o código e veja se acertou no terminal
  ex: const resposta = 5;
*/
console.clear(); //Irá limpar o terminal para você
const resposta = 24; //insira o valor da final variável 'estudo' aqui
var estudo = 10; //inicialmente declarada com var e inicializada com o valor 10.
const multiplicador = 2;

{ //estudo reatribuído com valor 2
  estudo = 2;
  { //estudo reatribuído com valor 6
    estudo = 6;
    { //estudo reatribuído com valor 7
      estudo = 7;
      { // estudo declarado novamente utilizando var, alterando a variável declarada anteriormente no escopo global. 
        var estudo = 24;
      }
    }
  }
}

// aqui no escopo global foi alterado o valor da variável por conta do uso da var, passando a valer 24.

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
