/*
  O usuário enviar um número de 1 até 7
  Imprima qual dia da semana corresponde o número
  ex: 1 ==> domingo
*/
console.clear();

const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

readline.question('\nDiga o número de 1 a sete e te direi o dia da semana!\n', dia => {
  const diaDaSemana = dia
  if (+diaDaSemana === 1) {
    console.log(dia + " é igual a " + "domingo");
  } else if (+diaDaSemana === 2) {
    console.log(dia + " é igual a " + "segunda");
  } else if (+diaDaSemana === 3) {
    console.log(dia + " é igual a " + "terça");
  } else if (+diaDaSemana === 4) {
    console.log(dia + " é igual a " + "quarta");
  } else if (+diaDaSemana === 5) {
    console.log(dia + " é igual a " + "quinta");
  } else if (+diaDaSemana === 6) {
    console.log(dia + " é igual a " + "sexta");
  } else if (+diaDaSemana === 7) {
    console.log(dia + " é igual a " + "sábado");
  }

  readline.close();
});

readline.on('close', () => {
  console.log('\nObrigada por vir!');
  process.exit(0);
});
