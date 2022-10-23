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
  

  readline.close();
});

readline.on('close', () => {
  console.log('\nObrigada comprar com a gente!');
  process.exit(0);
});

const advValor = (valor) => {
  if(+valor >= 100 && + valor < 500) {
  let desconto = +valor * 0.10;
  const valorFinal = +valor - desconto;
  console.log(`O valor do desconto foi de R$ ${desconto} e o valor a pagar foi de R$ ${valorFinal}`);
  } else {
    let desconto2 =  +valor * 0.2;
    const valorFinal2 = +valor - desconto2
    console.log(`O valor do desconto foi de R$ ${desconto2} e o valor a pagar é de R$ ${valorFinal2}`)
  }
}

  