/*
  Crie uma função que chama ela mesma (recursiva) para somar N números
  o primeiro argumento é a quantidade de números M
  Ex: node .\05-funcoes.js 5
  1 + 2 + 3 + 4 + 5 = 15 (printar 15 no terminal)
*/

console.clear();

//Não se preocupe com essas três linhas, vamos aprender semana que vem.
const myArgs = process.argv.slice(2);
const myArgs1 = myArgs[0];

let somatoria = 0
const funcaoRecursiva = (numero1) => { // É obrigatório usar essa função com os parâmetros
  console.log("A quantidade de números que serão somados é: "+ numero1);
  function foo (vezes, atual) {
      if (atual < vezes) {
      atual++;
        foo (vezes, atual);
    } else {
      return atual;  
    }
    somatoria += atual
}
foo(numero1,0);

}

funcaoRecursiva(myArgs1);
console.log("A somatória da quantidade de números informada é: " + somatoria)