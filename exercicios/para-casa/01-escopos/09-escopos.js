/*
  Não altere nada no código, apenas adicione um valor a variável 'resposta'!
  Execute o código e veja se acertou no terminal
  ex: const resposta = 5;
*/
console.clear(); //Irá limpar o terminal para você
const resposta = 35; //insira o valor da final variável 'estudo' aqui
let estudo = 10; // DEFINIÇÃO DE VARIAVEL EM ESCOPO GLOBAL 
const multiplicador = 2;

if (estudo === 10) { // COMPARAÇÃO VERDADEIRA ENTÃO O VALOR PASSA A SER 20
  estudo = 20; // REATRIBUIÇÃO DA VARIAVEL ESTUDO PARA 20
  if (estudo === 20) { // COMPARAÇÃO VERDADEIRA ENTÃO O VALOR PASSA A SER 35
    estudo = 35;// REATRIBUIÇÃO DA VARIAVEL ESTUDO PARA 35 (VALOR FINAL 35)
  } else {  
    estudo = 14;
  }
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
