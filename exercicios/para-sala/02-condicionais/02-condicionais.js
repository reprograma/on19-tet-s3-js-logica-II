console.clear()
// Testando o uso de condicionais

// Determine se a pessoa terá direito a meia-entrada ou entrada normal:
// > 18 - inteira
// < 18 - meia-entrada
// > 65 - meia-entrada
// Se tiver cupom, ganha pipoca

const idade = 17
const temCupom = true

if (idade > 18 && idade < 65) {
  console.log('Você tem direito a inteira')
} else if (idade === 18) {
  console.log('Você tem direito a 3/4 da entrada')
} else {
  console.log('Você tem direito a meia-entrada')
}

if (temCupom) {
  console.log('Ganhou pipoca')
}
