/*
  Não altere nada no código, apenas adicione um valor a variável 'resposta'!
  Execute o código e veja se acertou no terminal
  ex: const resposta = 5;
*/
console.clear(); //Irá limpar o terminal para você
<<<<<<< HEAD

const resposta = 1; //insira o valor da final variável 'estudo' aqui
let estudo = 10; // variável estudo recebe valor que poderá ser alterado, global.
const multiplicador = 2; // variável multiplicador recebe valor 
=======
const resposta = 0; //insira o valor da final variável 'estudo' aqui
let estudo = 10;
const multiplicador = 2;
>>>>>>> 80664b6b27e1b9bf25b9ac8f3a2bc56b3ef96a5a

estudo = 1; // a variável estudo passa a ter o valor 1
estudo = multiplicador * estudo; // estudo passa a valer 2 por conta da operação realizada.
estudo = estudo * estudo / estudo; // a variável continua com valor 2, uma vez que seu dobro é 4, dividida por 2 será 2.
estudo = estudo - multiplicador; // a variável com valor 2 tem o valor do multiplicador subtraido, nestes momento vale zero.
estudo += 2; // aqui a variável sofre um incremento de dois, volta ao valor 2.
estudo /= 2; // aqui a variável é dividida por dois, e passa a valer 1.

{
  let estudo = 6; // outra variável "estudo" foi criada dentro do escopo, e recebe o valor 6.
}

if (estudo === resposta) { // se a variável estudo for igual a variável resposta.
  console.log("\nVocê acertou!\n"); // o console monstrará mensagem dizendo que o usuário acertou.
} else {
  console.log("\nTente de novo!\n");// o console monstrará mensagem pedindo para o usuário tentar de novo.
}

//O usuario acerta a resposta (1), por que foi o ultimo valor encontrado para a variavel estudo depois da divisão. 
//O if esta fora do escopo, por isso, testa o ultimo valor atribuído a varíavel global e não o 6.
/*
  Você consegue justificar sua resposta? 
  Comente o código como foi a manipulação dos valores
  ex:
  let estudo = 1 //aqui foi feita a atribuição no escopo global
*/
