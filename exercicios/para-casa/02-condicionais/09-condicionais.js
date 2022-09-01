/* Crie um programa que receba duas notas de um aluno, calcule a média e mostre se ele foi aprovado!

Se a nota for maior ou igual a 6, printar "Aprovado"
Se a nota for maior ou igual a 5, printar "Recuperação"
Se for menor que a nota de recuperação, printar "Reprovado"
*/

//declara variaveis globais
let notaValor1 = "";
let notaValor2 = "";
let media = 0;
const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

readline.question('\nVamos ver se vc passou! Qual a primeira nota?\n', nota1 => {
  readline.question('\nQual a segunda nota?\n', nota2 => {

    //transforma string em numero
    notaValor1 = parseInt(nota1);
    notaValor2 = parseInt(nota2);
    console.log(nota1, nota2);

    readline.close();
  });
});

readline.on('close', () => {
  media = (parseInt(notaValor1) + parseInt(notaValor2)) / 2; //calcula média
  if (media >= 6) {
    console.log(`\nAprovado com média ${media}\n`);
  }
  if (media >= 5 && media < 6) {
    console.log(`\nRecuperação com média ${media}\n`);
  }
  if (media < 5) {
    console.log(`\nReprovado com média ${media}\n`);
  }
  console.log('\nEstude muito sempre!');
  process.exit(0);
});
