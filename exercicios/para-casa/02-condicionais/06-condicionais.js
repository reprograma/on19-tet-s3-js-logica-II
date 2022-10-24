/*
  O usuário enviar um número qualquer (lembre que ele vem como string)
  Imprima se o número é impar ou par
  ex: 1 ==> impar
*/
console.clear();
const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

readline.question('\nDiga o número e te direi se é impar ou par!\n', numero => {

  const n = numero;
  const resto = n % 2;

if (resto == 0) {
    console.log(n + " é um número par!!");
} else {
    console.log(n + " é um número impar!!");
}
  

  readline.close();
});

readline.on('close', () => {
  console.log('\nObrigada por jogar!');
  process.exit(0);
});
