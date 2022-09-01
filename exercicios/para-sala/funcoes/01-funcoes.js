console.clear();

const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });
  

const adivinhaChute = (chute) => {
    console.log("você chutou: ",chute);
  }

  readline.question('\nChuta um número de um a dez!\n', (chute) => {
    adivinhaChute(chute);
    readline.close();
  });