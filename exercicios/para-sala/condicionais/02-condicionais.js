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