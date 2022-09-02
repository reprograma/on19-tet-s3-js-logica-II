/*
  Não altere nada no código, apenas adicione um valor a variável 'resposta'!
  Execute o código e veja se acertou no terminal
  ex: const resposta = 5;
*/
console.clear(); //Irá limpar o terminal para você
<<<<<<< HEAD
const resposta = 24; //insira o valor da final variável 'estudo' aqui
var estudo = 10;// variável estudo recebe valor global 10.
const multiplicador = 2; // variável multiplicador recebe valor global constante 2.
=======
const resposta = 0; //insira o valor da final variável 'estudo' aqui
var estudo = 10;
const multiplicador = 2;
>>>>>>> 80664b6b27e1b9bf25b9ac8f3a2bc56b3ef96a5a

{
  estudo = 2; // a variavel estudo (filha) altera o valor original para 2
  {
    estudo = 6; // a variavel estudo (filha) depois para 6
    {
       estudo = 7; // a variavel estudo (filha) depois para 7
      {
        var estudo = 24; // por fim a variável filha passa a valer 24.
      }
    }
  }
}

// varaiável estudo recebeu atribuição como filha final no valor de 24, alterando assim o valor inicial que antes era 10.Por isso, resultado positivo.
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
