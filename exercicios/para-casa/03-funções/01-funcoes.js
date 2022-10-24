/*
  Crie um programa que recebe dois números como ARGUMENTOS e printe a média
  Ex: node .\02-funcoes.js 25 41
*/

//Não se preocupe com essas três linhas, vamos aprender semana que vem.
const myArgs = process.argv.slice(2);
const myArgs1 = myArgs[0];
const myArgs2 = myArgs[1];

console.clear();
const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

readline.question('\nCalcule a média de 2 números, digite o primeiro:\n', n1 => {
  readline.question('\nDigite o segundo número:\n', n2 => {
    
      console.log("Os números informados são: " + n1, n2);
      
      let mediaNum = (+n1 + +n2 ) / 2
      
        console.log("A média dos números informados é", mediaNum)

      readline.close();
    });
  });


readline.on('close', () => {
  console.log('\nObrigada por calcular!');
  process.exit(0);
});