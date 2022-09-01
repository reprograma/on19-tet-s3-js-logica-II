/*
  Crie uma função converta reais em dólar
  O valor em reais deve vir em primeiro argumento
  O a cotação do dia deve vir em segundo argumento
  ex: node .\03-funcoes.js 500 5.64
*/

//Não se preocupe com essas três linhas, vamos aprender semana que vem.
const myArgs = process.argv.slice(2);
const myArgs1 = myArgs[0];
const myArgs2 = myArgs[1];

const converterRealParaDolar = (reais, cotação) => { // É obrigatório usar essa função com os parâmetros
  console.log(reais, cotação);

  const valor = Number(reais)
  const conversao = Number(cotação)

  const dolar = valor/conversao

  console.log ('O valor a receber em dolar a receber é:', dolar)
}

converterRealParaDolar(myArgs1, myArgs2);
