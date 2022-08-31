console.clear();

// Deve comemorar caso o usuário acerte o número 7
const advinhaChute = (chute) => {
  if (+chute === 7) {
    console.log("Eba! Você acertou");
  } else {
    console.log("Tente de novo");
  }
}

const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

readline
  .question('\nChuta um número de um a dez!\n',
    (chute) => {
      advinhaChute(chute);
      readline.close();
    });
