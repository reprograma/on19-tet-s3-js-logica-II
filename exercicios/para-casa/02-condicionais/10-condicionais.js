/*
  Crie um programa que irá receber um valor de produto:
  De desconto de 10% para produtos acima de 100 reais
  De desconto de 20% para produtos acima de 500 reais
  Imprima na tela qual foi o desconto e o valor final da compra
*/

const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

readline.question('\nQuanto é o valor a ser calculado?\n', valor => {

  console.log(valor);

  readline.close();
});

readline.on('close', () => {
  console.log('\nObrigada comprar com a gente!');
  process.exit(0);
});
