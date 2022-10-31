/*
  Crie uma função converta reais em dólar
  O valor em reais deve vir em primeiro argumento
  O a cotação do dia deve vir em segundo argumento
  ex: node .\03-funcoes.js 500 5.64
*/

console.clear();

//Não se preocupe com essas três linhas, vamos aprender semana que vem.
const myArgs = process.argv.slice(2);
const myArgs1 = myArgs[0];
const myArgs2 = myArgs[1];

const converterRealParaDolar = (reais, cotação) => {
  console.log("O valor de R$" + reais + " (OBS: insira o número em Reais primeiro)", "a ser convertido em US$ de acordo com a cotação do dia: " + cotação + " (OBS: insira a cotação do Dólar americano)");
  const cotacaoDoDiaDolar = cotação;
  return console.log("Corresponde a US$" + (reais / cotacaoDoDiaDolar).toFixed(2));
}

converterRealParaDolar(myArgs1, myArgs2);
