/*
  Crie uma função que chama ela mesma (recursiva) para somar N números
  o primeiro argumento é a quantidade de números M
  Ex: node .\05-funcoes.js 5
  1 + 2 + 3 + 4 + 5 = 15 (printar 15 no terminal)
*/

//Não se preocupe com essas três linhas, vamos aprender semana que vem.
const myArgs = process.argv.slice(2);
const myArgs1 = +myArgs[0];

const funcaoRecursiva = (numero1, count, data = []) => { // É obrigatório usar essa função com os parâmetros
  if (count < numero1) {
    +count++;
    funcaoRecursiva (numero1, count, data);
    console.log(+data);
    } else {
      return; 
    }
} 

const saveData = (numero1, count, data) => {
  const results = [];
  this.funcaoRecursiva(numero1, count, data);
  return results; 
} 
//Unfortunately didn't have enough time/knowledge to make this work, by myself. I still think it was considerably close as you can run the 
//function and see it track how many numbers there are before the one from input
funcaoRecursiva(myArgs1, 0);
