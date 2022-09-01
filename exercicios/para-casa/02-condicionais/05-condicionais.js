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
  
  switch (dia) {
    case "1":
       console.log("Hoje e Domingo!!")
      break;
    case "2":
      console.log("Hoje e Segunda!!")
      break;
    case "3":
      console.log("Hoje e Terça!!")
      break;
    case "4":
      console.log("Hoje e Quarta!!")
      break;
    case "5":
      console.log("Hoje e Quinta!!")
      break;
    case "6":
      console.log("Hoje e Sexta!!")
      break;
    case "7":
      console.log("Hoje e Sabado!!")
      break;
    default:
    console.log("Numero invalido!!!")
  }

  readline.close();
});

readline.on('close', () => {
  console.log('\nObrigada por vir!');
  process.exit(0);
});
