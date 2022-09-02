<h1 align="center">
  <img src="assets/reprograma-fundos-claros.png" alt="logo reprograma" width="500">
</h1>

# On18-TodasEmTech-S3-Lógica de Programação-II

Esta é a 3ª semana da turma online Todas em Tech on18 - Back-end, nesta aula do dia 27/08/2022 teremos os seguintes conteúdos:

  - [1. Revisão da estruturas condicionais](#1-revisão-das-estruturas-condicionais)
    - [1.1. Exercício de fixação do if/else](#11-exercício-de-fixação-do-if-else)
    - [1.2. Switch/case](#12-switchcase)
  - [2. Estruturas de repetição](#2-estruturas-de-repetição)
    - [2.1. for](#21-for)
    - [2.2. while](#22-while)
    - [2.3. for-of](#23-for-of)
  - [3 Escopo](#3-escopo)
  - [4. Funções](#4-funções)
    - [4.1. Declarando uma função](#41-declarando-uma-função)
    - [4.2. Arrow function](#42-arrow-function)
  - [5. Objetos](#5-objetos)
    - [5.1. Criando um objeto](#51-criando-um-objeto)
    - [5.2. Acessando um objeto](#52-acessando-o-valor-de-uma-propriedade-ou-método-de-objetos-usando)
    - [5.3. Desestruturando um objeto](#53-desestruturando-um-objeto)
    - [5.4. Objeto Date](#54-objeto-date-e-seus-métodos)


## Apresentação

### Quem é a professora Lilit?

<img src='./assets/lilit.jpeg' width=500 alt='selfie de Lilit com cabelos cacheados longos presos em coque, brincos grandes prateados com pérola na ponta, maqueagem em tons nudes e fundo em tons claros'>

[Lilit Bandeira](https://www.instagram.com/lilitravesti), é uma travesti paraibana residente no São Paulo, trabalho como Software Engineer no Nubank, ex-aluna e professora {reprograma} e professora também no minas programam, estudante de Analise e Desenvolvimento de Sistemas na Mackenzie;

#### Contatos

- [E-mail](devlilitbandeira@gmail.com)
- [LinkedIn](https://www.linkedin.com/in/lilitbandeira)
- [GitHub](https://github.com/lilitbandeira)

### Quem são as monitoras?

<img src='./assets/mitsuri.jpeg' width=500 alt='personagem mitsuri do anime kimetsu no yaiba, ela tem cabelos rosas longos em duas tranças com franja verde, olhos verdes, veste um kimono branco e uma blusa preta por baixo, está com o rosto corado e tem sua mão direita próxima ao rosto, ao fundo é um degadê de laranja para amarelo com 3 corações rosa'>

### Quem são as alunas?

<img src='./assets/madoka.jpg' width=500 alt='5 personagens do anime madoka mágica, todas vestem vestidos colegiais, cada uma com uma cor, esquerda para direita temos a primeira com cabelos loiros amarrados com vestido amarelo, segunda tem cabelos curtos azuis, vestido azul e segura uma espada, no meio uma de cabelos rosa amarrados em dois coques laterais com laços, seu vestido também é rosa, a quarta tem cabelos longos vinho e vestido da mesma cor, a quinta tem cabelos pretos longos e soltos e usa vestido cinza, ao fundo um gradiente de cor que varia entre branco, amarelo e rosa, de cima para baixo'>

## Acordos

- Enviar dúvidas no chat com as monitoras;
- Levantar a mão sempre que desejar falar, o que pode ser feito a qualquer momento;
- Manter microfones desligados sempre que alguém estiver falando;
- Manter as câmeras ligadas o máximo de tempo possível;
- Antes de começar, vamos organizar nosso setup.
  * Fork esse [repositório](https://github.com/reprograma/on18-tet-s2-logica-I) 
  * Clone o fork na sua máquina (Para isso basta abrir o seu terminal e digitar `git clone url-do-seu-repositorio-forkado`)
  * Entre na pasta do seu repositório (Para isso basta abrir o seu terminal e digitar `cd nome-do-seu-repositorio-forkado`)
  * Altere o nome da pasta "nome-aluna" para o seu nome-sobrenome, este é o único local onde você deve realizar alterações 

# Plano de Aula

## 1. Revisão das estruturas condicionais

### 1.1. Exercício de fixação do `if... else`

### 1.2. Switch/case

- A condicional switch avalia uma expressão, combinando o valor da expressão para um cláusula `case`, e executa as instruções associadas ao case. *(MDN)* Passamos o `break` para sair da condicional quando um case é correspondido e sua instrução executada. Caso nenhum case seja correspondido podemos usar a cláusula `default` (opcional)

```jsx
let regiao = 'centro-oeste'

switch (regiao) {
    case 'nordeste':
        console.log('possui 9 estados');
        break;
    case 'norte':
        console.log('possui 7 estados');
        break;
    case 'centro-oeste':
        console.log('possui 3 estados e DF');
        break;
    case 'sudeste':
        console.log('possui 4 estados');
        break;
    case 'sul':
        console.log('possui 3 estados');
        break;
}
```

---
## 2. Estruturas de repetição

- Podemos chamar também de Loop, laço ou método de iteração. Trata-se de comandos que mantém um trecho de código sendo executado até que uma condição de parada seja satisfeita;
- Sua principal função é possibilitar que possamos repetir um trecho de código sem a necessidade de escrever várias vezes esse trecho, para isso basta ter um ponto de partida e um ponto de chegada para a repetição;

### 2.1. `for`

- É uma estrutura de repetição com variável de controle, usada quando se sabe exatamente o ponto de partida e de chegada, o bloco será repetido enquanto a condição for verdadeira, ou seja, para quando a condição retorne `false`.

```js
  for (expressaoInicial; condicao; incremento) {
    código aqui;
  }
```

#### Exemplos:

```js
  for(let i = 0; i < 10; i++){ 
      console.log(`número ${i}`)
  }

  // Exemplo numa array (estrutura de dados que veremos nas próximas aulas)

  const numeros = [3, 2, 4, 3, 5, 1, 3, 4, 2]

  for (let i = 0; i < numeros.lenght; i++) {
    const dobro = numeros[i] * 2;
    console.log(dobro);
  }
```

### 2.2. `while`

- Tem um funcionamento muito parecido com o do `for`, de executar sua intrução desde que a condição seja verdadeira, é sempre possível substituir o uso do `for` pelo do `while`, sendo o critério obter o código de melhor leitura, o `while` está mais atrelado à condição ser atendida enquanto o `for` é mais usado para iterar com contadores. 

```js
  while (condicao) {
    código aqui;
  }
```

#### Exemplos:

```js
  let i = 1;
  while(i <=3) {
    console.log(`número ${i}`)
    i++
  }

// Exemplo numa array utilizando a mesma variável números criada no exemplo do for.

  let i = 0;
  while (i < numeros.lenght) {
    const dobro = numeros[i] * 2;
    console.log(dobro);
    i++;
  }
```

### 2.3.  `for... of`

- É um laço que percorre objetos iterativos, sendo o mais comum a array, chamando uma função para cada valor deste objeto;

```js
  for (variavel of iteravel) {
    declaração
  }
```

#### Exemplo:

```js
  // utilizaremos a mesma array números criada no exemplo do for.
  for (let numero of numeros) {
    const dobro = numero * 2;
    console.log(dobro);
  }
```

---
## 3. Escopo
  
  - É o contexto atual de execução, em que valores e expressões são "visíveis" ou podem ser referenciadas. *(MDN)* Podemos entender como um "lugar/parte" do código;
  
  - Se uma variável ou outra expressão não estiver "no escopo atual", então não está disponível para uso. *(MDN)*

  - Podemos separar basicamente os escopos em global que pode ser o `arquivo.js` onde o script se encontra ou ainda o escopo global de uma função* e local (ou de bloco) que se refere à qualquer bloco de código definido por {};

      * Uma função/function serve como um procedimento em JavaScript, e portanto, cria um escopo, de modo que (por exemplo) uma variável definida exclusivamente dentro da função não pode ser acessada de fora da função ou dentro de outras funções. *(MDN)*
  
  - Os escopos possuem camadas baseadas numa hierarquia, de modo que os escopos filhos tenham acesso aos escopos pais, mas não no sentido oposto.

---
## 4. Funções
  - É um bloco de comandos a serem executados quando solicitado, através de uma chamada direta ou em decorrência de um evento;
  - Uma função é o menor bloco de execução/construção no JavaScript, um conjunto de instruções que executa uma tarefa ou calcula um valor;
  - Uma função quando é chamada, pausa a thread (script) para realizar seu processamento, depois retorna o valor final e continua a execução da linha de código na sequência;

### 4.1. Declarando uma função

- O método mais comum de criar uma função no JS consiste no uso da palavra reservada `function`;
- Em seguida nomeamos a função, é uma boa prática nomear com verbo para indicar a ação realizada pela função;
- `()` com a lista de argumentos, caso seja necessário, separados por vírgulaç
- `{}` definição do escopo que recebe a o código que será executado quando a função foi invocada;
- `return` é a indicação do que a função deve retornar, também interrompendo o a execução do trecho de código em que está inserida;

```js
  
  // funcao sem argumentos

  function funcaoUm() {
    return console.log(`retorno da função que não recebe argumentos`)
  }

  // funcao com um único argumento

  function funcaoDois(argumento) {
    return console.log(`retorno da função que recebe um argumentos, neste caso foi ${argumento}`)
  }

  // funcao com mais de um argumento

  function funcaoTres(numeroUm, numeroDois) {
    let media = (numeroUm + numeroDois)/2
    return console.log(`Média = ${media}`)
  }

  funcaoUm();
  funcaoDois('reprograma');
  funcaoTres(8, 7);

  // funcao anonima

  let funcaoQuatro = function () {
    return console.log('retorno da função anônima')
  } // muito utilizado quando vamos passar a função como parâmetro para outra função

  let soma = function(numero) {return numero * numero};
  console.log(soma(3))
```

### 4.2. Arrow Function

- Uma sintaxe mais cura e moderna em relação a expressão `function` e podem substituir em quase todos os casos de forma a diminuir a complexidade de leitura em diversos casos;
- As arrow functions são geralmente anônimas, mas podem ser nomeadas ou atribuidas a variáveis para que possam ser invocadas; 
- É uma sintaxe natural da programação funcional que permite escrever expressões de funções mais curtas e com retornos implícitos, removendo a palavra-chave `return` e as chaves `{}` quando possuimos apenas uma linha de execução;

```js
  function somar(x, y) {
    return console.log(x + y)
  }

  // sintaxe () => {}
  let somar = (x, y) => console.log(x + y)
  // quando a execução da função ocupa apenas uma linha de código não há neessidade nem do uso do {} e nem do return, simplificando ainda mais a sintaxe
```

- A sintaxe das arrow functions é bastante comum em padrões funcionais como muito do que aprenderemos em métodos de arrays nas próximas aulas;

---
## 5. Objetos

Um objeto é uma coleção de dados e/ou funcionalidades relacionadas (que geralmente consistem em diversas variáveis e funções — que são chamadas de propriedades e métodos quando estão dentro de objetos). (MDN) Os objetos são formados por chave e valor

### 5.1. Criando um objeto:

```js

const professora = new Object()
  professora.nome = "Lilit"
  professora.sobrenome = "Bandeira"
  professora.cidade = "São Paulo"

const aluna = {
  nome: { primeiro: "Gabriela", segundo: "Lemos" },
  idade: 21,
  cidade: "São Paulo",
  interesses: ["música", "animes"],
  saudacao: () => console.log("olá meninas"),
};
```

### 5.2. Acessando o valor de uma propriedade ou método de objetos usando:

#### 5.2.1. Notação de ponto - Digitando o ponto, podemos acessar todos as propriedades e métodos encapsuladas dentro do objeto

```js
console.log(aluna.nome.primeiro);
aluna.saudacao();
```

#### 5.2.2. Notação de cochetes - Usamos as chaves (como strings) para acessar o valor de um item

```js
console.log(aluna["nome"]["primeiro"]);
console.log(aluna["idade"]);
console.log(aluna["interesses"][0]);
```

### 5.3. Desestruturando um objeto:

```js
const { idade, saudacao } = aluna;
```

### 5.4. Objeto Date e seus métodos;

- Cria uma instância JavaScript de Date que representa um único momento no tempo. Objetos Date são baseados no valor de tempo que é o número de milisegundos desde 1º de Janeiro de 1970 (UTC). (MDN)

- O método toLocaleDateString() retorna uma string com a representação de parte da data baseando-se no idioma. (MDN) Argumentos locales e options

```js
const hoje = new Date();

console.log(hoje); // 2022-08-27T10:56:49.693Z

const dia = hoje.getDate();
const mes = hoje.getMonth();
const ano = hoje.getFullYear();

console.log(`${dia}/${mes + 1}/${ano}`); // 27/08/2022 🤔

const dataFormatada = hoje.toLocaleDateString("pt-BR");
console.log(dataFormatada); // 27/08/2022

const options = {
  weekday: "long",
  year: "numeric",
  month: "long",
  day: "numeric",
};
const dataLonga = hoje.toLocaleDateString("pt-BR", options);
console.log(dataLonga); // sábado, 27 de agosto de 2022
```

---
# Exercícios 

## [Exercicio para sala](https://github.com/reprograma/on18-tet-s2-logica-II/tree/main/exercicios/nome-aluna/para-sala)

## [Exercicio para casa](https://github.com/reprograma/on18-tet-s2-logica-II/tree/main/exercicios/nome-aluna/para-casa)

---
# Referências

```bash
  Livro: Lógica de Programação e Algoritmos com JavaScript
  Autor: Edécio Fernando Lepsen
  Editora: novatec
```
## Links úteis 

- [Estruturas de repetição](https://www.youtube.com/watch?v=J2X-olc3Z6Y&list=PLb2HQ45KP0WsFop0pItGSUYl6baYjKEye&index=34&ab_channel=GlauciaLemos)
- [Estruturas de repetição](https://www.youtube.com/watch?v=BRjbyBaF8ko&list=PLb2HQ45KP0WsFop0pItGSUYl6baYjKEye&index=35&ab_channel=GlauciaLemos)
- [Estruturas de repetição](https://www.youtube.com/watch?v=lXsKBDhixXQ)
- [Funções](https://www.youtube.com/watch?v=KKbgPzxfRuw&ab_channel=MarcoBruno)
- [Funções](https://github.com/braziljs/eloquente-javascript/blob/master/chapters/03-funcoes.md)
- [Funções](https://www.youtube.com/watch?v=r3i-FlzU6DA&ab_channel=GlauciaLemos)
- [Funções](https://www.youtube.com/watch?v=NtoaRRuwj3U&ab_channel=GlauciaLemos)
- [Funções](https://www.youtube.com/watch?v=_FoVLrBpSkE&list=PLlAbYrWSYTiPQ1BE8klOtheBC0mtL3hEi&index=7&ab_channel=WillianJusten)
- [Escopo](https://www.youtube.com/watch?v=Z77lTPYrgiw&ab_channel=WillianJusten)
- [Objetos](https://www.youtube.com/watch?v=MGBHpBnL1TY&list=PLb2HQ45KP0WsFop0pItGSUYl6baYjKEye&index=40&ab_channel=GlauciaLemos)
- [Objetos](https://www.youtube.com/watch?v=X6klpqubyBw&ab_channel=Rocketseat)
- [Objetos](https://www.youtube.com/watch?v=n5uiJr-v0KQ&ab_channel=Origamid)
