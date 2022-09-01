/*
  O usuário irá chutar um número.
  Imprima uma mensagem legal quando ele acertar o número 7
  imprima que ele errou caso chutar qualquer outro número
*/

const advinhaChute = (chute) => { // FUNÇÃO COM A CONDICIONAL SOLICITADA 
  if (+chute === 7) { // CONDIÇÃO: SE CHUTE FOR IGUAL A 7 FAÇA O SOLICITADO 
    console.log("Legal! Você acertou");
  } else {
    console.log("Você errou! Tente de novo");
  }
}

const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

readline.question('\nChuta um número de um a dez!\n', chute => {

  advinhaChute(chute); //CHAMA A FUNÇÃO adivinhaChute

  readline.close();
});



readline.on('close', () => {
  console.log('\nObrigada por jogar!');
  process.exit(0);
});
