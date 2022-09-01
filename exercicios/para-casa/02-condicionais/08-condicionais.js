/*
  O usuário irá enviar 3 números, calcule a média deles (lembre que ele vem como string)
  Imprima a média
  ex: 2, 3, 4 ==> 3
*/
//declara varaiveis globais
let valor1 = 0;
let valor2 = 0;
let valor3 = 0;
let media = 0;

const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

readline.question('\nVamos calcular a média de 3 números, digite o primeiro:\n', n1 => {
  readline.question('\nSegundo número:\n', n2 => {
    readline.question('\nTerceiro número\n', n3 => {
       //faz a string virar inteiro
      valor1 = parseInt(n1);
      valor2 = parseInt(n2);
      valor3 = parseInt(n3);

      console.log(n1, n2, n3);

      readline.close();
    });
  });
});

readline.on('close', () => {
  media = (valor1 + valor2 + valor3) / 3; //calcula média
  console.log(`\nA média dos números é ${media}\n`);
  console.log('\nObrigada por calcular!');
  process.exit(0);
});
