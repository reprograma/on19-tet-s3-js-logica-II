/*
  Não altere nada no código, apenas adicione um valor a variável 'resposta'!
  Execute o código e veja se acertou no terminal
  ex: const resposta = 5;
*/
console.clear(); //Irá limpar o terminal para você
const resposta = 1; //insira o valor da final variável 'estudo' aqui
let estudo = 10;  // DEFINIÇÃO DE VARIAVEL EM ESCOPO GLOBAL 
const multiplicador = 2;

estudo = 1; // ESTUDO PASSA A VALER 1 

estudo = multiplicador * estudo; // ESTUDO PASSA A VALER 2*1 QUE É IGUAL A 2

estudo = estudo * estudo / estudo; // ESTUDO PASSA A VALER 2*2/2 QUE É IGUA A 2

estudo = estudo - multiplicador; // ESTUDO PASSA A VALER 2-2 QUE É IGUAL A 0

estudo += 2; // ESTUDO PASSA A VALER 0+2 QUE É IGAUL A 2

estudo /= 2; // ESTUDO PASSA A VALER 2/2 QUE É IGAUL A 1 (VALOR FINAL 1)

{
  let estudo = 6; // NOVA VARIAVEL, SÓ SERA LIDA DENTRO DE ESCOPO LOCAL 
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
