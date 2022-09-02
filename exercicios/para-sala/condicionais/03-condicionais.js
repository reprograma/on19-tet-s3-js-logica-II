<<<<<<< HEAD
//function

=======
>>>>>>> 80664b6b27e1b9bf25b9ac8f3a2bc56b3ef96a5a
console.clear();
// Maiores de idade pagam inteira
// Menores de idade pagam meia

const idade = 18;

function verificarMaiorDeIdade(idadeAVerificar) {
  if (idadeAVerificar >= 18) {
    console.log("Pagar entrada inteira");
  } else {
    console.log("Pagar meia entrada");
  }
}

const verificarMaiorDeIdade2 = (idadeAVerificar) => {
  if (idadeAVerificar >= 18) {
    console.log("Pagar entrada inteira");
  } else {
    console.log("Pagar meia entrada");
  }
}

verificarMaiorDeIdade(idade);
verificarMaiorDeIdade2(idade)
console.log("\n\nFinal");
