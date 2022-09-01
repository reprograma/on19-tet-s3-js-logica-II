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
   advValor(valor)
   desconto1 = valor * 0.10
   desconto2 = valor * 0.20
  //console.log(valor);

  readline.close();
});

readline.on('close', () => {
  console.log('\nObrigada comprar com a gente!');
  process.exit(0);
});


