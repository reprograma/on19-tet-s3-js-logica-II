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

  let price = Number (valor)

  if (price >= 500){
    price *= 0.8
    console.log ('Discount: 20%')
  }
  else if (price >= 100){
    price *= 0.9
    console.log ('Discount: 10%')
  }

  console.log ('Final price:', price)

  readline.close();
});

readline.on('close', () => {
  console.log('\nObrigada comprar com a gente!');
  process.exit(0);
});
