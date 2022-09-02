/*
  Não altere nada no código, apenas adicione um valor a variável 'resposta'!
  Execute o código e veja se acertou no terminal
  ex: const resposta = 5;
*/
console.clear(); //Irá limpar o terminal para você
<<<<<<< HEAD
const resposta = 35; //insira o valor da final variável 'estudo' aqui
let estudo = 10; // variável estudo recebe valor global 10
const multiplicador = 2;//variável multiplicador recebe valor global constante 2.
=======
const resposta = 0; //insira o valor da final variável 'estudo' aqui
let estudo = 10;
const multiplicador = 2;
>>>>>>> 80664b6b27e1b9bf25b9ac8f3a2bc56b3ef96a5a

if (estudo === 10) { // se a variável estudo for igual ao valor 10
  estudo = 20;// estudo passa a ser 20
  if (estudo === 20) { // se a variável estudo for igual ao valor 20
    estudo = 35; // estudo passa a ser 35
  } else { //se nenhuma das condições forem verdadeiras 
    estudo = 14; // estudo passa a valer 14.
  }
}
//como a variável estudo satisfez duas condições, ela recebeu o valor de 35, por isso o resultado da condição abaixo é positivo.


if (estudo === resposta) {
  console.log("\nVocê acertou!\n");
} else {
  console.log("\nTente de novo!\n");
}

console.log(estudo);
/*
  Você consegue justificar sua resposta?
  Comente o código como foi a manipulação dos valores
  ex:
  let estudo = 1 //aqui foi feita a atribuição no escopo global
*/
