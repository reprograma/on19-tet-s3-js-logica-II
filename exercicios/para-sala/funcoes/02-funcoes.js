console.clear();


const adivinhaChute = (chute1, chute2) => {
    if(+chute === 7 && +chute === 9) {
        console.log("Eba! Você acertou.");
    } else {
        console.log("Tente de novo.");
    }
}
const readline = require('readline').createInterface({
        input: process.stdin,
        output: process.stdout
  });
      
readline.question('\nChuta um número de um a dez!\n',
    (chute1) => {
      readline.question('\nChuta outro número de um a dez!\n',
          (chute2) => {
            adivinhaChute(chute1, chute2);
            readline.close();
          });
});
 
//Exemplo 2
/*console.clear();

// Deve comemorar caso o usuário acerte
// chute1 sendo o número 7
// chute2 sendo o número 9
const advinhaChute = (chute1, chute2) => {
  if (+chute1 === 7 && +chute2 === 9) {
    console.log("Eba! Você acertou");
  } else {
    console.log("Tente de novo");
  }
}

const pergunta = (primeiroChute) => {
  readline
    .question('\nChuta outro número de um a dez!\n',
      (segundoChute) => {
        advinhaChute(primeiroChute, segundoChute);
        readline.close();
      });
}

const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

readline.question(
  '\nChuta um número de um a dez!\n', pergunta
);
*/
