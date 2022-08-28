/*
  Não altere nada no código, apenas adicione um valor a variável 'resposta'!
  Execute o código e veja se acertou no terminal
  ex: const resposta = 5;
*/
console.clear(); //Irá limpar o terminal para você
const resposta = 20; //insira o valor da final variável 'estudo' aqui
let estudo = 10; //inicialmente declarada com let e inicializada com o valor 10.
const multiplicador = 2;

// na arrow function clojure estudo recebe o valor de 20.
//no return é declarada uma nova variável estudo utilizando let, inicializada com valor 25.  
const clojure = () => {
  estudo = 20;
  return () => {
    let estudo = 25;
  }
}

const funcaoDaFuncao = clojure(); // é declarada a const funcaoDaFuncao que recebe a função clojure
funcaoDaFuncao(); // funcaoDaFuncao é chamada 

// estudo vale 20. 

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

