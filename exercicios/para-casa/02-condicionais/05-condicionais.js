/*
  O usuário enviar um número de 1 até 7
  Imprima qual dia da semana corresponde o número
  ex: 1 ==> domingo
*/

const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
})

readline.question(
  '\nDiga o número de 1 a 7 e te direi o dia da semana:\n',
  dia => {
    if (+dia === 1) {
      console.log('Domingo')
    }
    if (+dia === 2) {
      console.log('Segunda-Feira')
    }
    if (+dia === 3) {
      console.log('Terça-Feira')
    }
    if (+dia === 4) {
      console.log('Quarta-Feira')
    }
    if (+dia === 5) {
      console.log('Quinta-Feira')
    }
    if (+dia === 6) {
      console.log('Sexta-Feira')
    }
    if (+dia === 7) {
      console.log('Sábado')
    } else if (+dia >= 8) {
      console.log('Valor fora do intervalo. Tente outra vez')
    }

    readline.close()
  }
)

readline.on('close', () => {
  console.log('\nObrigada por vir!')
  process.exit(0)
})
