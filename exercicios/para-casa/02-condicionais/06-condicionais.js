/*
  O usuário enviar um número qualquer (lembre que ele vem como string)
  Imprima se o número é impar ou par
  ex: 1 ==> impar
*/

let parImpar = (numero) => {
  if(numero % 2 == 0){
    console.log("O número digitado é par.")
    }else{
    console.log("O número digitado é ímpar.")
  }
}
const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

readline.question('\nDigite um número e te direi se é impar ou par!\n', numero => {
  parImpar(numero);
  //console.log(numero);

  readline.close();
});

readline.on('close', () => {
  console.log('\nObrigada por jogar!');
  process.exit(0);
});
