/*
  Não altere nada no código, apenas adicione um valor a variável 'resposta'!
  Execute o código e veja se acertou no terminal
  ex: const resposta = 5;
*/
console.clear(); //Irá limpar o terminal para você
<<<<<<< HEAD
const resposta = 25; //insira o valor da final variável 'estudo' aqui
let estudo = 10;// variável estudo recebe valor global 10.
const multiplicador = 2; // variável multiplicador recebe valor global constante 2.
=======
const resposta = 0; //insira o valor da final variável 'estudo' aqui
let estudo = 10;
const multiplicador = 2;
>>>>>>> 80664b6b27e1b9bf25b9ac8f3a2bc56b3ef96a5a

const clojure = () => { // criada função clojure
  estudo = 20; //estudo recebe valor de 20
  return () => { // retorna
    estudo = 25; // estudo recebe valor de 25
  }
}

const funcaoDaFuncao = clojure(); // criada variavel funçãoDaFunção que recebe a função clojure 
funcaoDaFuncao(); // função é chamada o que retorna valor de 25


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

