/*
  Crie uma função converta reais em dólar
  O valor em reais deve vir em primeiro argumento
  O a cotação do dia deve vir em segundo argumento
  ex: node .\03-funcoes.js 500 5.64
*/

//Não se preocupe com essas três linhas, vamos aprender semana que vem.

console.clear();

const myArgs = process.argv.slice(2);
const myArgs1 = myArgs[0];
const myArgs2 = myArgs[1];

/*const converterRealParaDolar = (reais, cotação) => { // É obrigatório usar essa função com os parâmetros
  console.log(reais, cotação);
}*/

const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

const converterRealParaDolar = (reais, cotacao) => {// É obrigatório usar essa função com os parâmetros
  readline.question('\nInforme o valor em reais que quer converter:\n', reais =>{
    readline.question('\nInforme o valor do dolar hoje: \n', cotacao =>{
     conversor = (+reais) / (+cotacao);
     console.log(`Para o dolar no valaor de,` ,cotacao, ` o valor convertido é de U$:`, conversor.toFixed(2),`dolares.`);

     readline.close();
  });
 });
};

converterRealParaDolar(myArgs1, myArgs2);

readline.on('close', () => {
  console.log('\nFIM');
  process.exit(0);
});