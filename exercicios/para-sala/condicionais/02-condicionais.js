<<<<<<< HEAD
//pessoas acima de 65 anos devem pagar, meia.
//maior de 18 paga inteira.
//menor que 18 paga meia.
//pessoa com 18 anos exatos para 75% de desconto.

console.clear();

const idade = 77;
const temCupom = true;

if (idade >= 18 && idade <= 65) {
     console.log ("Você tem idade suficiente para pagar entrada inteira.");
} else if (idade === 18) {
      console.log ("Recebe desconto de 75%."); 
} else {
     console.log("Você paga meia entrada.");
}

if (temCupom) {
    console.log("Ganha pipoca.");
}

console.log("Fim da consulta.")
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
>>>>>>> 80664b6b27e1b9bf25b9ac8f3a2bc56b3ef96a5a
