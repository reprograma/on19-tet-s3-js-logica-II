/*
  Crie um programa que irá receber um valor de produto:
  De desconto de 10% para produtos acima de 100 reais
  De desconto de 20% para produtos acima de 500 reais
  Imprima na tela qual foi o desconto e o valor final da compra
*/
let valorProd = 0;
let valorFinal = 0;

const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

readline.question('\nQuanto é o valor a ser calculado?\n', valor => {

  //transforma string em numero
  valorProd = parseInt(valor);

  console.log(valor);

  readline.close();
});

readline.on('close', () => {
  if (valorProd > 100 && valorProd <= 500) {
    valorFinal = valorProd - (valorProd * 0.1);
    console.log(`\nO valor final com desconto de 10% é ${valorFinal}\n`);
  }
  if (valorProd > 500) {
    valorFinal = valorProd - (valorProd * 0.2);
    console.log(`\nO valor final com desconto de 20% é ${valorFinal}\n`);
  }
  console.log('\nObrigada comprar com a gente!');
  process.exit(0);
});
