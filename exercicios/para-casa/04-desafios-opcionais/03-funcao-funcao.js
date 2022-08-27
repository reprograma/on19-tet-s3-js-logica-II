/*
  Crie uma função que retorna uma função que retorna uma função, que soma dois números!
*/

const primeiraFuncao = () => {
  return function segundaFuncao() {
    return function terceiraFuncao(a, b) {
      console.log(+a + +b)
    }
  };
}

const segundaFuncao = primeiraFuncao();
const terceiraFuncao = segundaFuncao();

terceiraFuncao(5, 5); // deve imprimir 10 no terminal
