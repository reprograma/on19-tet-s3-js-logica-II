/*
  O usuário irá chutar um número.
  Imprima uma mensagem legal quando ele acertar o número 7
  imprima que ele errou caso chutar qualquer outro número
*/
console.clear();
const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

readline.question('\nChuta um número de um a dez!\n', chute => {

  console.log(chute);
    if(+chute === 7) {
        console.log("Eba! Você tem um ótimo chute!!");
    }else {
        console.log("aaah, que pena! Tente de novo!!");
    }
  
    readline.close();

});

readline.on('close', () => {
  console.log('\nObrigada por jogar!');
  process.exit(0);  
});
