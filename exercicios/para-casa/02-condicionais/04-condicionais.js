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
  if (chute ===7) {
    console.log("Muito bem ! você acertou")
  }
  else {
    console.log("Ops você errou, tente novamente.")
  }
  
  console.log(chute);

  readline.close();
});
//Condições criadas :

readline.on('close', () => {
  console.log('\nObrigada por jogar!');
  process.exit(0);
});
