/*
  O usuário enviar um número qualquer (lembre que ele vem como string)
  Imprima se o número é impar ou par
  ex: 1 ==> impar
*/

const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

readline.question('\nDiga o número e te direi se é impar ou par!\n', numero => {
  if(+numero % 2 === 0) { // verifica se o resto da divisão é igual a 0. Se sim, ele é par. Caso contrário ele é impar. 
    console.log("O número é par!")
  } else {
    console.log("O número é impar!")
  }
  console.log(numero);

  readline.close();
});

readline.on('close', () => {
  console.log('\nObrigada por jogar!');
  process.exit(0);
});
