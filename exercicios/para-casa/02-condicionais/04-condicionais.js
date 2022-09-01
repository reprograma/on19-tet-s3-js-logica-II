/*
  O usuário irá chutar um número.
  Imprima uma mensagem legal quando ele acertar o número 7
  imprima que ele errou caso chutar qualquer outro número
*/

const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

readline.question('\nChuta um número de um a dez!\n', (chute) => {
numeroChute(chute);
readline.close();
});

let numeroChute = (chute) => {
  if (+chute !== 7) {
    console.log('\nVish.... Tenta de novo');}
    else {
      console.log("Você é incríveeeel! Parabéns!")
    }}

    //Não consegui fazer com o readline.on!