// FOR

// for (expressaoInicial; condicao; incremento) {
//   código aqui;
// }

for(let i = 0; i <= 10; i++) {3
  console.log(`número ${i}`)
}

// let alunas = ["Natália", "Meujaela", "Gabriele"];
// let numero = 2
// let numeros = [3, 2, 4, 3, 5, 1, 3, 4, 2, 9, 3, 1];

// console.log("length é ", numeros.length)

// console.log(numeros[0])
// console.log(numeros[1])
// console.log(numeros[2])

for(let i = 0; i < numeros.length; i++) {
  const dobro = numeros[i] * 2 
  console.log(dobro)
}

console.log(i)

// WHILE

// while (condicao) {
  //   código aqui;
  // }
  
let i = 0
while (i < numeros.length) {
  const dobro = numeros[i] * 2
  console.log(dobro)
  i++
}

// FOR/OF

// for (variavel of iteravel) {
//   declaração
// }
let numeros = [3, 2, 4, 3, 5, 1, 3, 4, 2, 9, 3, 1];

for (let numero of numeros) {
  const dobro = numero * 2;
  console.log(dobro)
}


