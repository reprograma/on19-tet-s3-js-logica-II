/*
  O usuário enviar um número de 1 até 7
  Imprima qual dia da semana corresponde o número
  ex: 1 ==> domingo
*/

const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

readline.question('\nDiga o número de 1 a sete e te direi o dia da semana!\n', dia => {

  console.log(dia);
  if (dia ==1) {
console.log("Hoje é segunda-feira")
  } if (dia == 2){
    console.log ("Hoje é terça-feira")
  } if  (dia == 3){
    console.log("Hoje é quarta-feira")
  }if (dia == 4){
    console.log("Hoje é quinta-feira")
  } if (dia == 5){
    console.log("Hoje é sexta-feira")
  }if (dia == 6){
    console.log("Hoje é sábado")
  } if (dia == 7){
    console.log("Hoje é domingo")
  } else if (+dia >= 8) {
    console.log("Digite outro número")
  }


  readline.close();
});

readline.on('close', () => {
  console.log('\nObrigada por vir!');
  process.exit(0);
});
