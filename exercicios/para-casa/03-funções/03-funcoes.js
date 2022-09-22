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
  let perderDinheiro = +reais / cotação
  console.log(`O valor em Dolar é de R$ ${perderDinheiro.toFixed(2)}`);
}

converterRealParaDolar(myArgs1, myArgs2);
