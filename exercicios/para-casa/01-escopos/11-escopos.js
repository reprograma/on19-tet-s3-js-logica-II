/*
  Não altere nada no código, apenas adicione um valor a variável 'resposta'!
  Execute o código e veja se acertou no terminal
  ex: const resposta = 5;
*/
console.clear(); //Irá limpar o terminal para você
const resposta = 44; //insira o valor da final variável 'estudo' aqui
let estudo = 10; // DEFINIÇÃO DE VARIAVEL EM ESCOPO GLOBAL 
const multiplicador = 2;

const testar = (valor) => { // DEFINIÇÃO DE FUNÇAÕ TESTAR
  if (valor === 5) { // SE VALOR IGUAL A 5
    let estudo = 11; // DEFINIÇÃO DE NOVA VARIAVEL 
  } else { // SE VALOR DIFERENTE DE 5 ENTRA NO ELSE 
    estudo = 44; // VARIAVEL PASSA A RECEBER 44 VALOR FINAL 
  }
}

testar(7); // PRIMEIRO E ÚNICO VALOR TESTADO 
testar(5);

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

