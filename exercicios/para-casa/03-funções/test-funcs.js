//input: node test-funcs.js

const myArgs = process.argv.slice(2);
const myArgs1 = myArgs[0];
const myArgs2 = myArgs[1];

const calcularMedia = (numero1, numero2) => { // É obrigatório usar essa função com os parâmetros

    const num1 = +numero1
    const num2 = Number.parseFloat(numero2)
    const answer = (num1 + num2)
    console.log (answer)
  
  }
  
  calcularMedia(myArgs1, myArgs2);