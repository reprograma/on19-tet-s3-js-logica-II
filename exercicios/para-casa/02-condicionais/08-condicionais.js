/*
  O usuário irá enviar 3 números, calcule a média deles (lembre que ele vem como string)
  Imprima a média
  ex: 2, 3, 4 ==> 3
*/

const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

readline.question('\nVamos calcular a média de 3 números, digite o primeiro:\n', n1 => {
  readline.question('\nSegundo número:\n', n2 => {
    readline.question('\nTerceiro número\n', n3 => {

      console.log(n1, n2, n3);
const num1= (+n1)
const num2 = (+n2)
const num3 = (+n3)
const soma = 3
const resposta = (num1 + num2 + num3) /soma
console.log(resposta)
      readline.close();
    });
  });
});

 
