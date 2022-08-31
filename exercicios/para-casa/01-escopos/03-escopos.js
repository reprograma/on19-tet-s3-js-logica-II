/*
  Não altere nada no código, apenas adicione um valor a variável 'resposta'!
  Execute o código e veja se acertou no terminal
  ex: const resposta = 5;
*/
console.clear(); //Irá limpar o terminal para você
const resposta = 6; // a resposta vai ser a última atribuição da var estudo fora dos conxetes
let estudo = 10;
const multiplicador = 2;

{
  estudo = 1;

  estudo = multiplicador * estudo;

  estudo = estudo * estudo / estudo;

  estudo = estudo - multiplicador;

  estudo += 2;

  estudo /= 2;
} // vai ser ignorado porque essa nova atruição vai ficar apenas dentro dos conxetes que não altera a variavel original

estudo = 6;

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
