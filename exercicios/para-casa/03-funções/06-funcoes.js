/*
  Crie um programa que usa uma função que retorna outra que calcula a circunferência do circulo
  A fórmula é ==> C = πd (circunferência = PI * diâmetro)
  Ex: node .\02-funcoes.js 10
  printar 31.4
*/

console.clear();

//Não se preocupe com essas três linhas, vamos aprender semana que vem.
const myArgs = process.argv.slice(2);
const myArgs1 = myArgs[0];

const gerarFuncao = () => {
  const PI = 3.14;
  console.log("O valor de π é: "+ PI);
  console.log("O diâmetro informado: " + myArgs1);
  return myArgs1 * PI;
}

const calcularCircunferencia = () => {
  return console.log(`A circunferência do círculo é: ${gerarFuncao().toFixed(2)}`);
};

calcularCircunferencia(myArgs1);