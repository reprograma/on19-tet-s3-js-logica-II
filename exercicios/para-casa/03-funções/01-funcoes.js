/*
  Crie um programa que recebe dois números como ARGUMENTOS e printe a média
  Ex: node .\02-funcoes.js 25 41
*/

//Não se preocupe com essas três linhas, vamos aprender semana que vem.
const myArgs = process.argv.slice(2);
const myArgs1 = myArgs[0];
const myArgs2 = myArgs[1];
console.log(myArgs1)

const calcularMedia = (numero1, numero2) => { // É obrigatório usar essa função com os parâmetros
  let media = (numero1 + numero2)/2
  console.log(`A média entre ${numero1} e ${numero2} é igual a ${media}`)
  return
  
  //console.log(numero1, numero2);
}

calcularMedia(5, 9)
calcularMedia(7.5, 10)

//calcularMedia(myArgs1, myArgs2);
