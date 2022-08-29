/*
  Não altere nada no código, apenas adicione um valor a variável 'resposta'!
  Execute o código e veja se acertou no terminal
  ex: const resposta = 5;
*/
console.clear(); //Irá limpar o terminal para você
const resposta = 44; //insira o valor da final variável 'estudo' aqui
let estudo = 10; //inicialmente declarada com let e inicializada com o valor 10.
const multiplicador = 2;

// a arrow function recebe um valor como parâmetro que será utilizado dentro do bloco if.  
const testar = (valor) => {
  if (valor === 5) {
    let estudo = 11;
  } else {
    estudo = 44;
  }
}
// na primeira chamada a condição do if retorna false e o fluxo segue para else, alterando valor de estudo para 44. 
// na segunda chamda a condição do if retorna true e uma nova variável estudo é declarada e inicializada com valor 11. 

testar(7); // 44
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

