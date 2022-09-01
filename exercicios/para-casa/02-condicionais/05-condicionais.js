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
  switch (+dia) {
    case 1:
      console.log("Domingo");
      break;
    case 2:
      console.log("Segunda-feira");
      break;
    case 3:
      console.log("Terça-feira");
      break;
    case 4:
      console.log("Quarta-feira");
      break;
    case 5:
      console.log("Quinta-feira");
      break;
    case 6:
      console.log("Sexta-feira");
      break;
    case 7:
      console.log("Sabado");
      break;
    default:
      console.log('dia da semana invalido, tente novamente')
  }
  readline.close();
});

readline.on('close', () => {
  console.log('\nObrigada por vir!');
  process.exit(0);
});
