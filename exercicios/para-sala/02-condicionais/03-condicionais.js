console.clear()
// > 18 - inteira
// < 18 - meia-entrada

const idade = 18

// exemplo 1
function verificaIdade(idade2) {
  if (idade >= 18) {
    console.log('Você paga inteira')
  } else {
    console.log('Você tem direito a meia-entrada')
  }
}

// exemplo 2 - não altera a constante
const verificaIdade2 = idade2 => {
  if (idade >= 18) {
    console.log('Você paga inteira')
  } else {
    console.log('Você tem direito a meia-entrada')
  }
}

verificaIdade(idade)
verificaIdade2(idade)
console.log('\n\nFinal')
