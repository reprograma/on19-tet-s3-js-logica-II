console.clear()

// Deve comemorar caso o usuário acerte o nº 7

const adivinhaChute = (chute1, chute2) => {
  if (+chute1 === 7 && +chute2 === 9) {
    console.log('Parabéns!!')
  } else {
    console.log('Tente outro nº')
  }
}

const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
})

readline.question('\nEscreva um número entre 1 e 10:\n', chute1 => {
  readline.question('\nEscreva outro número entre 1 e 10:\n', chute2 => {
    adivinhaChute(chute1, chute2)
    readline.close()
  })
})
