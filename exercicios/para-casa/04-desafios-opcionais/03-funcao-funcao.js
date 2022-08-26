/*
  Crie uma função que retorna uma função que retorna uma função, que soma dois números!
*/

const primeiraFuncao = () => {

}

const segundaFuncao = primeiraFuncao();
const terceiraFuncao = segundaFuncao();

terceiraFuncao(5, 5); // deve imprimir 10 no terminal
