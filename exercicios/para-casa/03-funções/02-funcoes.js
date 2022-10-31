/*
  Crie uma função que calcule quantos dias o usuário viveu, baseado na idade;
  A idade deve vir como o primeiro argumento do comando
  O nome deve vir em segundo
  ex: node .\02-funcoes.js 25 Joana
  OBS: considerar 365 dias por ano, não precisa checar anos bissextos
*/

console.clear();

//Não se preocupe com essas três linhas, vamos aprender semana que vem.
const myArgs = process.argv.slice(2);
const myArgs1 = myArgs[0];
const myArgs2 = myArgs[1];

const usuário = myArgs2;
const idadeUsuario = +myArgs1;

const calcularDiasDeVida = (idade, nome) => {
  console.log("Sua idade é: "+ idade, "\nMuito bem, "+ nome);
  ( myArgs1 && myArgs2 ) ? console.log("Você viveu " + (idade * 365) + " dias") : console.log("Para saber quantos dias você viveu, primeiro digite sua idade somente em números (Ex: 30), dê um espaço, e na sequência digite o seu nome");
  return
}

calcularDiasDeVida(myArgs1, myArgs2);
