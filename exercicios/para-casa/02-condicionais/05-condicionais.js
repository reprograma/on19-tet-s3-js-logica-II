/*
  O usuário enviar um número de 1 até 7
  Imprima qual dia da semana corresponde o número
  ex: 1 ==> domingo
*/

const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

readline.question('\nDiga o número de 1 a sete e te direi o dia da semana!\n', (dia) => {

switch (dia) {
  case "1":
    console.log("Domingo")
    break;
  case "2":
    console.log("Segunda")
    break;
  case "3":
    console.log("Terça")
    break;
  case "4":
    console.log("Quarta")
    break;
  case "5": 
    console.log("Quinta")
    break;
  case "6":
    console.log("Sexta")
    break;
  case "7":
    console.log("Sábado")
    break;
  default:
    console.log("Digite um número de 1 a 7")
}

  console.log(dia);

  readline.close();
});

readline.on('close', () => {
  console.log('\nObrigada por vir!');
  process.exit(0);
});
