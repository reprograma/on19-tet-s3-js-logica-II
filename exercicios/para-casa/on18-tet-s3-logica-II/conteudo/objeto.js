// const nome = "Darlene"
// const idade = 18
// const signo = "Aquário"

// console.log(signo)

//key: value

const aluna = {
  nome: { primeiro: "Darlene",
          segundo: "Santos" },
  idade: 18,
  interesses: ['Música', 'Filmes'],
  signo: 'Capricórnio',
  saudacao: () => console.log(`oi , eu sou Darlene`)
}

// let { nome, idade } = aluna
// console.log(idade)


// aluna.idade = 19

// console.log(aluna.nome.segundo)
// console.log(aluna.idade)
// console.log(aluna.interesses[0])
// aluna.saudacao()

const professora = new Object()
professora.nome = "Lilit"
console.log(professora)
professora.signo = "Aquário"
console.log(professora)

// console.log(aluna["nome"]["primeiro"])
// console.log(aluna["interesses"][1])


// objeto DATE

const hoje = new Date();
// console.log(hoje)

// const dia = hoje.getDate();
// console.log(dia)

// const mes = hoje.getMonth();
// console.log(mes)

// const ano = hoje.getFullYear();
// console.log(ano)

// console.log(`${dia}/${mes + 1}/${ano}`)

const configuracoes = {
  weekday: "long",
  year: 'numeric', 
  month: 'long', 
  day: 'numeric',
  hour: 'numeric', 
  minute: 'numeric', 
  second: 'numeric',
} 

const dataFormatada = hoje.toLocaleDateString("pt-br", configuracoes)
console.log(dataFormatada)
