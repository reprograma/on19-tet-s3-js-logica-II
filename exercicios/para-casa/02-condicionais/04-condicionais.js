/*
  O usuário irá chutar um número.
  Imprima uma mensagem legal quando ele acertar o número 7
  imprima que ele errou caso chutar qualquer outro número
*/
let valor = ""; //declara variavel global

const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

readline.question('\nChuta um número de um a dez!\n', chute => {

  valor = chute; //valor recebe chute

  console.log(chute);

  readline.close();
});

readline.on('close', () => {
  if(valor === "7"){ //verifica se é verdade
    console.log("Jackpot!! Você acertou o numero da sorte!!1!")
  }else{ //se não
  console.log('\nObrigada por jogar!');
  }
  process.exit(0);
});
