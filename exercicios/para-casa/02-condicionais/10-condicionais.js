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

  verificaDesconto(valor);

  readline.close();
});

readline.on('close', () => {
  console.log('\nObrigada comprar com a gente!');
  process.exit(0);
});

const verificaDesconto = (valor) => { // FUNÇÃO COM PARÂMETRO VALOR DO PRODUTO
  if (+valor >= 100 && +valor < 500) { // CONDIÇÃO:  SE VALOR MENOR OU IGUAL A 100 E MENOR QUE 500
    let desconto10 = (+valor/100) * 10 // CALCULO DE DESCONTO DE 10%
    const precoFinal = +valor - desconto10
    console.log("\nDesconto de R$ " + desconto10);
    console.log("Preço a pagar R$ " + precoFinal)
  } else { 
    let desconto20 = (+valor/100) * 20 // // CALCULO DE DESCONTO DE 20%
    const precoFinal2 = +valor - desconto20
    console.log("\nDesconto de R$ " + desconto20);
    console.log("Preço a pagar R$ " + precoFinal2)
  }
}