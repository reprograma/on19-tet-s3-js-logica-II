console.clear();

// Deve comemorar caso o usuário acerte
// chute1 sendo o número 7
// chute2 sendo o número 9
const advinhaChute = (chute1, chute2) => {
  if (+chute1 === 7 && chute2 === 9) {
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
    (chute1) => {
      readline
        .question('\nChuta outro número de um a dez!\n',
          (chute2) => {
            advinhaChute(chute1, chute2);
            readline.close();
          });
    });
