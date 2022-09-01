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
 advDia (dia)
  //console.log(dia);

  readline.close();
});

readline.on('close', () => {
  console.log('\nObrigada por vir!');
  process.exit(0);
});

const advDia = (dia) => { 
  if (+dia === 1){
    console.log('Domingo')
  }else if(+dia === 2) {
    console.log('Segunda')
  }else if(+dia === 3) {
    console.log('Terça')
  }else if(+dia === 4) {
    console.log('Quarta')
  }else if(+dia === 5) {
    console.log('Quinta')
  }else if(+dia === 6) {
    console.log('Sexta')
  }else {
    console.log('Sábado')
  }
}