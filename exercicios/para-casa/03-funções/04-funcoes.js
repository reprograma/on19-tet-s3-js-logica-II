/*
  Crie um programa que recebe dois números como ARGUMENTOS e printe a média
  Ex: node .\02-funcoes.js 25 41
*/

console.clear();

//Não se preocupe com essas três linhas, vamos aprender semana que vem.
/*const myArgs = process.argv.slice(2);
const myArgs1 = myArgs[0];
const myArgs2 = myArgs[1];*/

const calcularMedia = (numero1, numero2) => {
    return "A média é: "+ ((+numero1) + (+numero2)) / 2;
}

const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

readline.question('\nInforme o primeiro número\n', numero1 => {
  readline.question('\nAgora informe o segundo número\n', numero2 => {
  
    console.log("Seus números informados foram: "+ numero1, "e " + numero2);
    console.log(calcularMedia(+numero1, +numero2));    
    readline.close();
  });
});

readline.on('close', () => {
  console.log('\nObrigada por testar meu programa!');
  process.exit(0);
});
