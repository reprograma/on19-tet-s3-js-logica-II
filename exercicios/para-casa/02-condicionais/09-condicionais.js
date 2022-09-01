/* Crie um programa que receba duas notas de um aluno, calcule a média e mostre se ele foi aprovado!

Se a nota for maior ou igual a 6, printar "Aprovado"
Se a nota for maior ou igual a 5, printar "Recuperação"
Se for menor que a nota de recuperação, printar "Reprovado"
*/

const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

readline.question('\nVamos ver se vc passou! Qual a primeira nota?\n', nota1 => {
  readline.question('\nQual a segunda nota?\n', nota2 => {

    verificarAprovado(nota1, nota2);

    readline.close();
  });
});

readline.on('close', () => {
  console.log('\nEstude muito sempre!');
  process.exit(0);
});


const verificarAprovado = (nota1, nota2) => { // FUNÇÃO COM PARÂMETRO AS DUAS NOTAS 
  let media = (+nota1 + +nota2) / 2 // CALCULO MÉDIA DAS NOTAS 
  if (media >= 6) { // CONDIÇÃO:  SE MEDIA MAIOR OU IGUAL A 6 ( APROVADO)
    console.log("\nAprovado");
  } else if(media >= 5){ // CONDIÇÃO:  SE MEDIA MAIOR OU IGUAL A 5 ( RECUPERAÇÃO)
    console.log("\nRecuperação");
  }else{// CONDIÇÃO: MENOR QUE 5 (REPROVADO)
    console.log("\nReprovado");
  }
}