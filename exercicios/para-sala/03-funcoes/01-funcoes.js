console.clear()

// Deve comemorar caso o usuário acerte o nº 7

const adivinha = chute => {
  if (+chute === 7) {
    console.log('Parabéns!!')
  } else {
    console.log('Tente outro nº')
  }
}

const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
})

readline.question('\nEscreva um número entre 1 e 10:\n', chuteDado => {
  //console.log('Você entrou com', chuteDado)
  adivinha(chuteDado)
  readline.close()
})
