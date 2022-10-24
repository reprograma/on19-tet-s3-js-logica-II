<<<<<<< HEAD
console.clear() 
// maiores de idade pagam inteira
// menores de idade pagam meia
// maiores de 65 anos pagam meia 
// pessoa com 18 anos paga 75% da entrada
// se tiver cupom, ganha pipoca
// == ou === comparar se é igual
// < > <= >=


const idade = 77
const temCupom = true

if (idade >= 18 && idade < 65 ){
    console.log("Pagar entrada inteira")
 } else if (idade === 18) {
    console.log("Pagar 3/4 entrada ") 
    } else {
      console.log("Pagar meia entrada ") 
  }
  if (temCupom) {
    console.log("Ganhou Pipoca")}


console.log("Bom Filme")
=======
console.clear();
// Maiores de idade pagam inteira
// pessoas acima ou com 65 anos deve pagar meia;
// pessoa com 18 paga 75% da entrada
// Menores de idade pagam meia
// Se tiver cupom, ganha pipoca

const idade = 35;
const temCupom = true;

// == ou === comparar se é igual
// > < <= >=
if (idade > 18 && idade < 65) {
  console.log("Pagar entrada inteira");
} else if (idade === 18) {
  console.log("Pagar 3/4 entrada");
} else {
  console.log("Pagar meia entrada");
}

if (temCupom) {
  console.log("Ganhou Pipoca");
}

console.log("Final");
>>>>>>> efed9f207fe9ad54703841a1fd514d13773bfbad
