/*
  Não altere nada no código, apenas adicione um valor a variável 'resposta'!
  Execute o código e veja se acertou no terminal
  ex: const resposta = 5;
*/
console.clear(); //Irá limpar o terminal para você
const resposta = 10; //insira o valor da final variável 'estudo' aqui
let estudo = 10; // DEFINIÇÃO DE VARIAVEL EM ESCOPO GLOBAL VLAOR NÃO FOI ALETRADO AO LONGO DO CODIGO 
const multiplicador = 2;

const testar = (valor) => { // CRIAÇÃO DE ARROW FUNCTION 
  if (valor === 5) {  // PARAMETRO VALOR RECEBEU O VALOR 5 QUE É IGUAL A 5 
    let estudo = 11; // ENTÃO FOI DEFINIDA UMA NOVA VARIAVEL COM VALOR 11
  } else {
    estudo = 44;
  }
}

{
  let estudo = 5; // NOVA VARIAVEL EM ESCOPO LOCAL
  testar(estudo); // ESTUDO RECEBEU VALOR 5
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

