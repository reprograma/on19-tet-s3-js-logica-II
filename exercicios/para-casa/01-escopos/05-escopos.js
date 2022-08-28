/*
  Não altere nada no código, apenas adicione um valor a variável 'resposta'!
  Execute o código e veja se acertou no terminal
  ex: const resposta = 5;
*/
console.clear(); //Irá limpar o terminal para você
const resposta = 3; //insira o valor da final variável 'estudo' aqui
let estudo = 10; //inicialmente declarada com let e inicializada com o valor 10.
const multiplicador = 2;

{ //dentro do bloco houve nova declaração de estudo, recebendo o valor 3.
  let estudo = 3;
}

{ //dentro do bloco houve nova declaração de estudo, recebendo 2 valores distintos (6 e 0).
  let estudo = 6;
  estudo = 0;
}

{ // dentro do bloco estudo foi reatribuído com valor 3.
  estudo = 3;
  { // dentro do bloco houve nova declaração, recebendo o valor "Olá!"
    let estudo = "Olá!";
  }
}

// último valor atribuído a estudo foi 3.

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
