/*
  O usuário enviar um número qualquer (lembre que ele vem como string)
  Imprima se o número é impar ou par
  ex: 1 ==> impar
*/
let valor = 0;
const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

readline.question('\nDiga o número e te direi se é impar ou par!\n', numero => {

  valor = parseInt(numero);
  
  console.log(numero);

  readline.close();
});

readline.on('close', () => {
  if(valor % 2 == 0){ //verifica se o resto é 0 e consequentemente par
    console.log("Par");
  }else{ //se não é impar
    console.log("Impar");
  }
  console.log('\nObrigada por jogar!');
  process.exit(0);
});
