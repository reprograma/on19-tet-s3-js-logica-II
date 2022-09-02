console.clear();


const adivinha = (chute) => {
    if(chute == 7) {
        console.log("Eba! Você acertou.");
    } else {
        console.log("Tente de novo.")
    }
}
const readline = require('readline').createInterface({
        input: process.stdin,
        output: process.stdout
  });
      
readline.question('\nChuta um número de um a dez!\n', (chuteDado) => {
    adivinha (chuteDado);    
    readline.close();
    });    
    //console.log("Você chutou ", chute)
    