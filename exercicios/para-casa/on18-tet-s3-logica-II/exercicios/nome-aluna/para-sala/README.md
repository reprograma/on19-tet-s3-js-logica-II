# Exercício de Sala 🏫  

## Melhorando o código anterior

- Vamos aperfeiçoar o exercício de casa da aula anterior, para isso vamos automatizar a nossa lógica através de uma função que recebe como parâmetro uma array de objetos esta array é a lista de países que devemos classificar a partir do seu IDH e retornar a classificação de todos como um novo objeto.

Array de entrada:

```js
const listaDePaises = [
  { 
    nome: "noruega",
    idh: 0.944
  },
  { 
    nome: "qatar",
    idh: 0.850
  },
  { 
    nome: "canadá",
    idh: 0.913
  },
  { 
    nome: "brasil",
    idh: 0.755
  },
  { 
    nome: "japão",
    idh: 0.891
  },
  { 
    nome: "vietnã",
    idh: 0.666
  },
  { 
    nome: "afeganistão",
    idh: 0.465
  },
  { 
    nome: "camarões",
    idh: 0.512
  }
]
```

Dica de saída:

```js
const idhPaises = {
  noruega: "classifiaçãp",
  qatar: "classifiaçãp",
  canada: "classifiaçãp",
  brasil: "classifiaçãp",
  japao: "classifiaçãp",
  vietna: "classifiaçãp",
  afeganistao: "classifiaçãp",
  camaroes: "classifiaçãp"
}

```

Dica: Para realizar este exercício usaremos funções e estruturas de repetição, além disso, a variável listaDePaises é uma lista de dados (Array), que apesar de nao termos estudado à fundo, já sabemos como iterar (percorrer cada elemento) através do `for` ou `for... of`
