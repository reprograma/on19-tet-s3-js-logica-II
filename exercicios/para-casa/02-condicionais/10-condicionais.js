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

  valor = +valor
  let desconto
  let precoComDesconto

  if(valor > 500){
    desconto = valor * 0.2
    precoComDesconto = valor - desconto
    console.log(`Parabéns, vc recebeu desconto de 20% e pagará ${precoComDesconto} pelo produto`) 
  } else if(valor > 100){
    desconto = valor * 0.1
    precoComDesconto = valor - desconto
    console.log(`Parabéns, vc recebeu desconto de 10% e pagará ${precoComDesconto} pelo produto`)
  } else {
    console.log("Infelizmente não há desconto para este valor. =/")
  }

  console.log(valor);

  readline.close();
});

readline.on('close', () => {
  console.log('\nObrigada comprar com a gente!');
  process.exit(0);
});

// primeiro converteu-se o valor de string para number, verificou se o valor era maior que o citado para aplicar os descontos corretamente em cada situação.
