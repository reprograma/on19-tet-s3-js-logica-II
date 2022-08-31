/*
  Não altere nada no código, apenas adicione um valor a variável 'resposta'!
  Execute o código e veja se acertou no terminal
  ex: const resposta = 5;
*/
console.clear(); //Irá limpar o terminal para você
const resposta = 3; //insira o valor da final variável 'estudo' aqui
let estudo = 10; // DEFINIÇÃO DE VARIAVEL EM ESCOPO GLOBAL
const multiplicador = 2;

{
  let estudo = 3; // DEFINIÇÃO DE NOVA VARIAVEL EM ESCOPO LOCAL
}

{
  let estudo = 6;// DEFINIÇÃO DE NOVA VARIAVEL EM ESCOPO LOCAL
  estudo = 0; // REATRIBUIÇÃO DE VARIAVEL DE ESCOPO LOCAL ESTUDO PARA 0
}

{
  estudo = 3; // REATRIBUIÇÃO DA VARIAVEL ESTUDO PARA 3 (RESULTADO FINAL 3)
  {
    let estudo = "Olá!"; // DEFINIÇÃO DE NOVA VARIAVEL EM ESCOPO LOCAL
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
