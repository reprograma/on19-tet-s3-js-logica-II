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

  if(valor >= 100 && valor < 500){
    let desconto = valor * 0.1 
    let valorFinal = valor - desconto
    console.log("Seu desconto foi de: R$"+ desconto.toFixed(2) 
    + ", o valor final foi de: R$" + valorFinal.toFixed(2))
 } else if (valor >= 500){
   let desconto = valor * 0.2 
   let valorFinal = valor - desconto
   console.log("Seu desconto foi de: R$"+ desconto.toFixed(2) 
   + ", o valor final foi de: R$" + valorFinal.toFixed(2))
 } else {
   console.log("Seu valor não tem desconto!!!")
 }

  readline.close();
});

readline.on('close', () => {
  console.log('\nObrigada por comprar com a gente!');
  process.exit(0);
});
