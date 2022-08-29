/*
  O usuário irá chutar um número.
  Imprima uma mensagem legal quando ele acertar o número 7
  imprima que ele errou caso chutar qualquer outro número
*/

const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

readline.question('\nChuta um número de um a dez!\n', chute => {
  if (+chute === 7) { // foi necessário implementar a condição adequada para imprimir as mensagens.
    console.log(`Wow! Que sagaz, acertou o número perfeito: ${chute}`);
  } else {
    console.log("erro")
  }
  

  readline.close();
});

readline.on('close', () => {
  console.log('\nObrigada por jogar!');
  process.exit(0);
});
