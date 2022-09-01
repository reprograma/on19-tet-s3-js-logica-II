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
  if (valor >= 500) {
    console.log("O valor do desconto é: R$" + (valor * 0.2).toFixed(2), "\nO valor final da compra é de: R$" + (valor * 0.8).toFixed(2));
  } else if (valor >= 100) {
    console.log("O valor do desconto é: R$" + (valor * 0.1).toFixed(2), "\nO valor final da compra é de: R$" + (valor * 0.9).toFixed(2))
  } else {
    console.log("O valor do desconto é: R$" + (valor * 0).toFixed(2), "\nO valor final da compra é de: R$" + (+valor).toFixed(2))
  }

  readline.close();
});

readline.on('close', () => {
  console.log('\nObrigada comprar com a gente!');
  process.exit(0);
});
