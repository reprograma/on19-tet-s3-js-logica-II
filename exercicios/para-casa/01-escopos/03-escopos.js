/*
  Não altere nada no código, apenas adicione um valor a variável 'resposta'!
  Execute o código e veja se acertou no terminal
  ex: const resposta = 5;
*/
console.clear(); //Irá limpar o terminal para você
const resposta = 6; //insira o valor da final variável 'estudo' aqui
let estudo = 10;
const multiplicador = 2;

{
  estudo = 1;

  estudo = multiplicador * estudo; //1 *2 = 2

  estudo = estudo * estudo / estudo; //(2 * 2)/2 = 2

  estudo = estudo - multiplicador; //2 - 2 = 0

  estudo += 2; // 0+ 2 = 2

  estudo /= 2; // 2/2= 1
}

estudo = 6;

if (estudo === resposta) {
  console.log("\nVocê acertou!\n");
} else {
  console.log("\nTente de novo!\n");
}

