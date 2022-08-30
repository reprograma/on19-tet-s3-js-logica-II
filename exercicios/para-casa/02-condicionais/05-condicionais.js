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

  const semana = ['dom', 'seg', 'ter', 'quar', 'qui', 'sex', 'sab']
  if (dia > 7){
    console.log ('Apenas numeros de 1 a 7')
  }

  console.log (semana [dia-1])
  readline.close();
});

readline.on('close', () => {
  console.log('\nObrigada por vir!');
  process.exit(0);
});
