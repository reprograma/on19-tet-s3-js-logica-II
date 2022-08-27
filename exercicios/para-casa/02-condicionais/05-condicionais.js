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
      console.log('domingo');
      break;
    case 2:
      console.log('segunda :(');
      break;
    case 3:
      console.log('terça');
      break;
    case 4:
      console.log('quarta');
      break;
    case 5:
      console.log('quinta');
      break;
    case 6:
      console.log('sexta');
      break;
    case 7:
      console.log('sabado');
      break;
    default:
      console.log('input invalido, tente novamente')
  }
  readline.close();
});

readline.on('close', () => {
  console.log('\nObrigada por vir!');
  process.exit(0);
});
