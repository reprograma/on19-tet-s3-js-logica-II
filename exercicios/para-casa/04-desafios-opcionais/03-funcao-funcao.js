/*
  Crie uma função que retorna uma função que retorna uma função, que soma dois números!
*/

const primeiraFuncao = (n1, n2) => {
  return n1 + n2;
}

const segundaFuncao = primeiraFuncao();
const terceiraFuncao = segundaFuncao();

terceiraFuncao(5, 5); // deve imprimir 10 no terminal
