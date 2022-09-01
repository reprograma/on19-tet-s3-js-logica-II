/*
  O usuário enviar um número de 1 até 7
  Imprima qual dia da semana corresponde o número
  ex: 1 ==> domingo
*/
let valor = "";

const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

readline.question('\nDiga o número de 1 a sete e te direi o dia da semana!\n', dia => {


  valor = dia;

  console.log(dia);

  readline.close();
});

readline.on('close', () => {
  if(valor === "1"){ //verifica se é verdade
    console.log("Domingo")
  }
  if(valor === "2"){ //verifica se é verdade
    console.log("Segunda")
  }
  if(valor === "3"){ //verifica se é verdade
    console.log("Terça")
  }
  if(valor === "4"){ //verifica se é verdade
    console.log("Quarta")
  }
  if(valor === "5"){ //verifica se é verdade
    console.log("Quinta")
  }
  if(valor === "6"){ //verifica se é verdade
    console.log("Sexta")
  }
  if(valor === "7"){ //verifica se é verdade
    console.log("Sábado")
  }

  console.log('\nObrigada por vir!');
  process.exit(0);
  
});
