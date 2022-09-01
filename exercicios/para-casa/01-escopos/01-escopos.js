/*
  Não altere nada no código, apenas adicione um valor a variável 'resposta'!
  Execute o código e veja se acertou no terminal
  ex: const resposta = 5;
*/
console.clear(); //Irá limpar o terminal para você

const resposta = 6; //insira o valor da final variável 'estudo' aqui
let estudo = 10;
const multiplicador = 2;

estudo = 1 // valor da variavél passar a vale 1, pois antes foi declarada com o valor 10

estudo = multiplicador * estudo; // 2 *1 =2

estudo = estudo * estudo / estudo; // (2*2)/2 =2

estudo = estudo - multiplicador; // 2 -2 = 0

estudo += 2; //0 +2 = 2

estudo /= 2;  //2/2= 1 a variavél novamente passa a ter outro valor que é 1

estudo = 6;  // Novamente o valor foi mudado, porém é  o que será definido 
console.log(estudo);

if (estudo === resposta) {
  console.log("\nVocê acertou!\n"); //Será exibida se a resposta que digitei for igual ao do valor de estudo
} else {
  console.log("\nTente de novo!\n"); //Caso contrário a  resposta seja outra diferente de 6, essa mensagem erá executada
}






/*
  Você consegue justificar sua resposta?
  Comente o código como foi a manipulação dos valores
  R : AS VARIAVÉIS FORAM CRIADAS DENTRO DE UM ESCOPO GLOBAL, ou seja  ela torna acessível a qualquer parte da aplicação
  O VALOR DA VARIAVÉL "estudo", FOI ALTERADO DUAS VEZES, PORÉM SUA ULTIMA ATRIBUIÇÃO definitiva foi 6
  
*/
