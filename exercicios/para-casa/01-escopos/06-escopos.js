/*
  Não altere nada no código, apenas adicione um valor a variável 'resposta'!
  Execute o código e veja se acertou no terminal
  ex: const resposta = 5;
*/
console.clear(); //Irá limpar o terminal para você
const resposta = 10; //insira o valor da final variável 'estudo' aqui
let estudo = 10; // DEFINIÇÃO DE VARIAVEL EM ESCOPO GLOBAL (NÃO HOUVE REATRIBUIÇÃO)
const multiplicador = 2;

{
  const estudo = 15; // DEFINIÇÃO DE VARIAVEL CONST EM ESCOPO LOCAL, NÃO PODE SER ALTERADA 
  {
    let estudo = 11; //  DEFINIÇÃO DE NOVA VARIAVEL EM ESCOPO LOCAL
    estudo = 9;// REATRIBUIÇÃO DE VARIAVEL DE ESCOPO LOCAL ESTUDO PARA 9
    {
      estudo = "Olá!"; // REATRIBUIÇÃO DE VARIAVEL DE ESCOPO LOCAL ESTUDO PARA "Ola!"
    }
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
