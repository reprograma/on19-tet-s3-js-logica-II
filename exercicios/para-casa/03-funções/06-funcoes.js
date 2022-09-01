/*
  Crie um programa que usa uma função que retorna outra que calcula a circunferência do circulo
  A fórmula é ==> C = πd (circunferência = PI * diâmetro)
  Ex: node .\02-funcoes.js 10
  printar 31.4
*/

//Não se preocupe com essas três linhas, vamos aprender semana que vem.
const myArgs = process.argv.slice(2);
const myArgs1 = myArgs[0];

const gerarFuncao = (C, d) => { // É obrigatório usar essa função com os parâmetros
  const PI = 3.14;
  C = PI * d
  console.log("A circunferência é: " + C);
}

const calcularCircunferencia = gerarFuncao();
calcularCircunferencia(myArgs1);
