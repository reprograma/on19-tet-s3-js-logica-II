/*
  Crie um programa que recebe dois números como ARGUMENTOS e printe a média
  Ex: node .\02-funcoes.js 25 41
*/



const calcularMedia = (numero1, numero2) => { // É obrigatório usar essa função com os parâmetros

  const media = (numero1 + numero2)/2

 console.log(`A média entre ${numero1} e ${numero2} é ${media}`);

}


calcularMedia(6,8);
