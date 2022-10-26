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

  switch (+dia) {
    case 1:
      console.log("o dia é domingo");
      break;

      case 2:
      console.log("o dia é segunda - feira");
      break;

      case 3:
      console.log("o dia é terça - feira");
      break;

      case 4:
      console.log("o dia é quarta - feira");
      break;

      case 5:
      console.log("o dia é quinta - feira");
      break;

      case 6:
      console.log("o dia é sexta - feira");
      break;

      case 7:
      console.log("o dia é sábado");
      break;
  
    default:
      case 1:
      console.log("Digite um número válido (de 1 a 7)");
      break;
      break;
  }

  readline.close();
});

readline.on('close', () => {
  console.log('\nObrigada por vir!');
  process.exit(0);
});
