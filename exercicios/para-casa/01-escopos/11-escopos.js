/*
  Não altere nada no código, apenas adicione um valor a variável 'resposta'!
  Execute o código e veja se acertou no terminal
  ex: const resposta = 5;
*/
console.clear(); //Irá limpar o terminal para você
<<<<<<< HEAD
const resposta = 44; //insira o valor da final variável 'estudo' aqui
let estudo = 10; // variável estudo recebe valor global 10.
const multiplicador = 2; // variável multiplicador recebe valor global constante 2.
=======
const resposta = 0; //insira o valor da final variável 'estudo' aqui
let estudo = 10;
const multiplicador = 2;
>>>>>>> 80664b6b27e1b9bf25b9ac8f3a2bc56b3ef96a5a

const testar = (valor) => {//criada a função testar com valor
  if (valor === 5) {// se valor igual a 5
    let estudo = 11; // variavel estudo recebe 11
  } else { //senão
    estudo = 44; //estudo recebe valor de 44
  }
}

//chamada funçao testar atribuindo valores
testar(7);
testar(5);

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

