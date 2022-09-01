/*
  Crie uma função que chama ela mesma (recursiva) para somar N números
  o primeiro argumento é a quantidade de números M
  Ex: node .\05-funcoes.js 5
  1 + 2 + 3 + 4 + 5 = 15 (printar 15 no terminal)
*/

//Não se preocupe com essas três linhas, vamos aprender semana que vem.
const myArgs = process.argv.slice(2);
const myArgs1 = myArgs[0];

const funcaoRecursiva = (numero1) => { // É obrigatório usar essa função com os parâmetros
  for (let i = +numero1 - 1; i >= 1; i--)
  numero1 = +numero1 + i
  console.log(+numero1);
}

funcaoRecursiva(myArgs1);

// Meu primeiro loop S2, tks Giulianaaa :D