/*
  Não altere nada no código, apenas adicione um valor a variável 'resposta'!
  Execute o código e veja se acertou no terminal
  ex: const resposta = 5;
*/
console.clear(); //Irá limpar o terminal para você
<<<<<<< HEAD
const resposta = 10; //insira o valor da final variável 'estudo' aqui
let estudo = 10; // variavel global estudo recebe valor de 10.
=======
const resposta = 0; //insira o valor da final variável 'estudo' aqui
let estudo = 10;
>>>>>>> 80664b6b27e1b9bf25b9ac8f3a2bc56b3ef96a5a
const multiplicador = 2;

const testar = (valor) => {//criada função testar valor
  if (valor === 5) { // se valor for igual a  5, variável valor não recebe valor, não alterando valor da variável estudo.
    let estudo = 11; // variavel estudo , recebe valor de 11
  } else { // senão
    estudo = 44; // estudo recebe quarenta e quatro
  }
}

{
  let estudo = 5; //escopo criado com variavel estudo (filha) recebendo valor de 5
  testar(estudo); // funcção testar é chamada
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

