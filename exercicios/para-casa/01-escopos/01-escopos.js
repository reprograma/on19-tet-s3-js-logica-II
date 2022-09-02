/*
  Não altere nada no código, apenas adicione um valor a variável 'resposta'!
  Execute o código e veja se acertou no terminal
  ex: const resposta = 5;
*/
<<<<<<< HEAD


console.clear(); 
const resposta = 6; //insira o valor da final variável 'estudo' aqui
let estudo = 10; // criação da variável estudo neste momento, com uso da variável 'let'.
const multiplicador = 2; //criação da variável multiplicador, como variável 'const'.
=======
console.clear(); //Irá limpar o terminal para você
const resposta = 0; //insira o valor da final variável 'estudo' aqui
let estudo = 10;
const multiplicador = 2;
>>>>>>> 80664b6b27e1b9bf25b9ac8f3a2bc56b3ef96a5a

estudo = 1; // a variável estudo passa a ter valor 1
console.log(estudo);
estudo = multiplicador * estudo; // estudo passa a valer 2 por conta da operação realizada.
console.log(estudo);
estudo = estudo * estudo / estudo;// a variável continua com valor 2, uma vez que seu dobro é 4, dividida por 2 será 2.
console.log(estudo);
estudo = estudo - multiplicador;// a variável com valor 2 tem o valor do multiplicador subtraido, nestes momento vale zero.
console.log(estudo);
estudo += 2; // aqui a variável sofre um incremento de dois, volta ao valor 2.
console.log(estudo);
estudo /= 2; // sofre uma subtração por 2 e volta a ser zero.
console.log(estudo);
estudo = 6; // por fim recebe o valor de 6, seu resultado final.
console.log(estudo);

if (estudo === resposta) { // se a variável estudo for igual a variável resposta
    console.log("\nVocê acertou!\n"); // o console monstrará mensagem dizendo que o usuário acertou.
  } else { // senão
  console.log("\nTente de novo!\n");// o console monstrará mensagem pedindo para o usuário tentar de novo.
  }


/*
  Você consegue justificar sua resposta? Quando o código mostra que o usuário acertou é porque o último valor atribuido a resposta, foi 6, que é uma variável constante.
  Comente o código como foi a manipulação dos valores
  ex:
  let estudo = 1 //aqui foi feita a atribuição no escopo global
*/
