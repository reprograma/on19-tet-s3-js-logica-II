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

  console.log(chute);

  if(chute === "7") {
    console.log("\nVocê acertou!\n");
  } else {
    console.log("\nTente de novo!\n");
  }

  readline.close();
  
});

readline.on('close', () => {
  console.log('\nObrigada por jogar!');
  process.exit();
});
