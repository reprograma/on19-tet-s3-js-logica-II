/*
  Não altere nada no código, apenas adicione um valor a variável 'resposta'!
  Execute o código e veja se acertou no terminal
  ex: const resposta = 5;
*/
console.clear(); //Irá limpar o terminal para você
const resposta = undefined; //insira o valor da final variável 'estudo' aqui
let estudo; // DECLARAÇÃO DE VARIAVEL SEM VALOR INICIAL DEFINIDO 
const multiplicador = 2;

{
  {
    {
      let estudo = 0; // NOVA DEFINIÇÃO DE VARIAVEL EM ESCOPO LOCAL 
      {
        {
          let estudo = 7; // NOVA DEFINIÇÃO DE VARIAVEL EM ESCOPO LOCAL 
        }
        const estudo = 9; // NOVA DEFINIÇÃO DE VARIAVEL EM ESCOPO LOCAL (NÃO PODE SER ALTERADA )
      }
    }
    const estudo = 6;// NOVA DEFINIÇÃO DE VARIAVEL EM ESCOPO LOCAL (NÃO PODE SER ALTERADA )
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

