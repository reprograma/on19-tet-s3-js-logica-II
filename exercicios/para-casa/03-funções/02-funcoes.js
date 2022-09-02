/*
  Crie uma função que calcule quantos dias o usuário viveu, baseado na idade;
  A idade deve vir como o primeiro argumento do comando
  O nome deve vir em segundo
  ex: node .\02-funcoes.js 25 Joana
  OBS: considerar 365 dias por ano, não precisa checar anos bissextos
*/

//Não se preocupe com essas três linhas, vamos aprender semana que vem.
console.clear()

const myArgs = process.argv.slice(2);
const myArgs1 = myArgs[0];
const myArgs2 = myArgs[1];

//const calcularDiasDeVida = (idade, nome) => { // É obrigatório usar essa função com os parâmetros
 // console.log(idade, nome);
//}


const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

const calcularDiasDeVida = (idade, nome) => {// É obrigatório usar essa função com os parâmetros
  readline.question('\nInforme a sua idade:\n', idade =>{
    readline.question('\nInforme o seu nome:\n', nome =>{
     dias = (+idade) * 365;
     console.log( nome, `você possui,` ,dias, ` dias de vida, aproveite os que virão!!`);

     readline.close();
  });
 });
};

calcularDiasDeVida(myArgs1, myArgs2);

readline.on('close', () => {
  console.log('\nFIM');
  process.exit(0);
});