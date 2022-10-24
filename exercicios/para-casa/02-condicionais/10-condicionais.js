/*
  Crie um programa que irá receber um valor de produto:
  De desconto de 10% para produtos acima de 100 reais
  De desconto de 20% para produtos acima de 500 reais
  Imprima na tela qual foi o desconto e o valor final da compra
*/
console.clear();
const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

readline.question("\nQuanto é o valor a ser calculado?\n", (valorACalcular) => {
  
  const valor1 = 100 * 0.1; 
  const valor2 = 500 * 0.2;

  let valorDesconto1 = valorACalcular - valor1
    console.log(valorDesconto1)
    
    let valorDesconto2 = valorACalcular - valor2
      console.log(valorDesconto2)

      if (valorDesconto1 > 100) {
    console.log("Você ganhou 10% de desconto");
  } else if (valorDesconto2 > 500) { // não esta pegando os 20% de desconto
    console.log("Você ganhou 20% de desconto"); 
  } 
  readline.close();
  
    
  });

readline.on("close", () => {
  console.log("\nObrigada comprar com a gente!");
  process.exit(0);
});
