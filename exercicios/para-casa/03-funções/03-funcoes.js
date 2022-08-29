/*
  Crie uma função converta reais em dólar
  O valor em reais deve vir em primeiro argumento
  O a cotação do dia deve vir em segundo argumento
  ex: node .\03-funcoes.js 500 5.64
*/

//Não se preocupe com essas três linhas, vamos aprender semana que vem.
//const myArgs = process.argv.slice(2);
//const myArgs1 = myArgs[0];
//const myArgs2 = myArgs[1];

const converterRealParaDolar = (reais, cotacao) => { // É obrigatório usar essa função com os parâmetros
  
  let dolares = reais / cotacao
  console.log(`A quantia de R$ ${reais.toFixed(2)} convertida em US$ utilizando a cotação de R$ ${cotacao} equivale a US$ ${dolares.toFixed(2)}`)
  
  
  //console.log(reais, cotação);
}

converterRealParaDolar(5000, 5)
//converterRealParaDolar(myArgs1, myArgs2);
