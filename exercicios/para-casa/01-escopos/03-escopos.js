/*
  Não altere nada no código, apenas adicione um valor a variável 'resposta'!
  Execute o código e veja se acertou no terminal
  ex: const resposta = 5;
*/
console.clear(); //Irá limpar o terminal para você
<<<<<<< HEAD
const resposta = 6; //insira o valor da final variável 'estudo' aqui
let estudo = 10; // variável estudo recebe valor global 10.
const multiplicador = 2;// variável multiplicador recebe valor constante 2.
=======
const resposta = 0; //insira o valor da final variável 'estudo' aqui
let estudo = 10;
const multiplicador = 2;
>>>>>>> 80664b6b27e1b9bf25b9ac8f3a2bc56b3ef96a5a

{
  estudo = 1; //valor recebido dentro do escopo, atribuindo 1

  estudo = multiplicador * estudo; //estudo dentro do escopo passa a ser 2

  estudo = estudo * estudo / estudo;// estudo dentro do escopo passa a ser 2, mais uma vez

  estudo = estudo - multiplicador;// estudo passa a valer zero, dentro do escopo

  estudo += 2; // estudo passa a valer 2, dentro do escopo

  estudo /= 2;// estudo passa a valer 1 dentro do escopo.
}

estudo = 6; // varaiável estudo recebe valor global de 6, alterando assim o valor inicial que antes era 10.

if (estudo === resposta) { // se a variável estudo for igual a variável resposta.
  console.log("\nVocê acertou!\n"); // o console monstrará mensagem dizendo que o usuário acertou.
} else {
  console.log("\nTente de novo!\n"); // o console monstrará mensagem pedindo para o usuário tentar de novo.
}

/*
  Você consegue justificar sua resposta?
  Comente o código como foi a manipulação dos valores
  ex:
  let estudo = 1 //aqui foi feita a atribuição no escopo global
*/
