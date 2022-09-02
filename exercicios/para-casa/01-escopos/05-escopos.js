/*
  Não altere nada no código, apenas adicione um valor a variável 'resposta'!
  Execute o código e veja se acertou no terminal
  ex: const resposta = 5;
*/
console.clear(); //Irá limpar o terminal para você
<<<<<<< HEAD
const resposta = 3; //insira o valor da final variável 'estudo' aqui
let estudo = 10; // variável estudo recebe valor global 10.
const multiplicador = 2; // variável multiplicador recebe valor global constante 2.
=======
const resposta = 0; //insira o valor da final variável 'estudo' aqui
let estudo = 10;
const multiplicador = 2;
>>>>>>> 80664b6b27e1b9bf25b9ac8f3a2bc56b3ef96a5a

{
  let estudo = 3; //outra variável é criada dentro do escopo e vale 3
}

{
  let estudo = 6;//mais uma variável é criada dentro do escopo e vale 6
  estudo = 0;// aqui a variável estudo (filha) recebe o valor de 0 dentro do escopo
}

{
  estudo = 3;// neste escopo a variavel estudo(filha) recebe o valor de 3
  {
    let estudo = "Olá!"; // ja a variavel estudo criada neste escopo recebe como atribuição uma string 
  }
}

if (estudo === resposta) {
  console.log("\nVocê acertou!\n");
} else {
  console.log("\nTente de novo!\n");
}

console.log(estudo);
// varaiável estudo recebeu atribuição como filha final no valor de 3, alterando assim o valor inicial que antes era 10.Por isso, resultado positivo.
/*
  Você consegue justificar sua resposta?
  Comente o código como foi a manipulação dos valores
  ex:
  let estudo = 1 //aqui foi feita a atribuição no escopo global
*/
