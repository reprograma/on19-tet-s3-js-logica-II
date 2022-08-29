/*
  Não altere nada no código, apenas adicione um valor a variável 'resposta'!
  Execute o código e veja se acertou no terminal
  ex: const resposta = 5;
*/
console.clear(); //Irá limpar o terminal para você
const resposta = 10; //insira o valor da final variável 'estudo' aqui
let estudo = 10; //inicialmente declarada com let e inicializada com o valor 10.
const multiplicador = 2;

// foi declarada uma arrow function que recebe um valor como parâmetro 

const testar = (valor) => {
  if (valor === 5) {
    let estudo = 11;
  } else {
    estudo = 44;
  }
}
// foi declarada uma nova variável estudo utilizando let, dentro do bloco, inicializada com valor 5. 
// em seguida a função testar foi chamada recebendo estudo como parâmetro (5).
// dentro da função a condição do if retorna true, uma vez que 5 === 5. Uma nova variável é declarada com let e inicializada com 11. 
{
  let estudo = 5;
  testar(estudo);
}

// aqui no escopo global, estudo permanece valendo 10. Não sendo alterado dentro da função.

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
