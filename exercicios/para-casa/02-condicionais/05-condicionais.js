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
  switch (dia) {
    case '1':
      dia = "Domingo"
      break
    case '2':
      dia = "Segunda"
      break
    case '3':
      dia = "Terça"
      break
    case '3':
      dia = "Quarta"
      break
    case '4':
      dia = "Quinta"
      break
    case '5':
      dia = "Sexta"
        break
    case '6':
      dia = "Sábado"
        break
    default:
        console.log("Dia inválido")

  }
  console.log(dia);

  readline.close();
});

readline.on('close', () => {
  console.log('\nObrigada por vir!');
  process.exit(0);
});
