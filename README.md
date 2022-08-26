<h1 align="center">
  <img src="assets/reprograma-fundos-claros.png" alt="logo reprograma" width="500">
</h1>

# Tema da Aula

Turma Online 19 - Todas em Tech  | Back-end | Semana 3 | 2022 | Professora Giu

## Instruções

Antes de começar, vamos organizar nosso setup.

* Fork esse repositório
* Clone o fork na sua máquina (Para isso basta abrir o seu terminal e digitar `git clone url-do-seu-repositorio-forkado`)
* Entre na pasta do seu repositório (Para isso basta abrir o seu terminal e digitar `cd nome-do-seu-repositorio-forkado`)

## Resumo

O que veremos na aula de hoje?

* Escopos
* Estruturas condicionais
* Funções

## Conteúdo

### Escopos

Ao conversarmos, não basta sabermos o significado das palavras, precisamos também entender o contexto daquilo que está sendo digo.

Ás vezes, falamos frases a pessoas amigas, que não fariam o menor sentido para quem ouvir fora de seu círculo de amizade íntima.

A gente também costuma chamar de piada interna, aquela coisa que só tem graça porque está no contexto de nosso grupo de convívio.

Muitas linguagens de programação possuem coisa semelhante. São os escopos de variáveis.

Podemos ter um mesmo nome de variável em contextos diferentes em nossa aplicação, mas que não serão as mesmas variáveis e não conterão o mesmo valor.

Veja o exemplo a seguir:

```js
const nome = "Joana";

{
  const nome = "Carla";
  console.log(nome); //irá printar Carla
}

console.log(nome); //irá printar Joana

```

Note que só por estar dentro de chaves {} conseguimos declara um variável com o mesmo nome e que contem outro valor, sem a variável anterior perdesse o seu valor.

A segunda variável ```nome```, declarada dentro das chaves, só existia dentro daquele contexto ou melhor, naquele escopo, já a primeira variável ```nome``` existe fora e dentro daquele escopo.

Podemos notar, que toda vez que é criado um novo escopo, ele acompanha o aparecimentos de chaves {}, veja:

```js
if(true) { // aqui se abriu um novo escopo

}

function test () { // aqui também

}

for (let i; i < 10; i++) { //aqui também

}

```

Dessa forma, os escopos limitam a acessibilidade de uma variável, uma variável que foi definida num escopo menos abrangente não irá ser acessível no escopo mais abrangente.

Isso pode parecer contraproducente, mas isso evita que variáveis que utilizamos apenas dentro de pequenas funções ou condicionais não fiquem 'poluindo' toda nossa aplicação.

O conhecimento do funcionamento dos escopos é importante para sabermos como e onde criamos nossa estrutura de dados e entender todo o fluxo de um código.

[Vídeo: três escopos javascript](https://youtu.be/N9769LLwhKc);

### Estruturas condicionais

Talvez todas as linguagens de programação disponham de alguma forma de indicar uma escolha baseada em dados, no código.

Como você indicaria, para um computador, se ele deve aplicar meia entrada no cinema ou não? Talvez você pudesse ter um ser humano ali, para analisar os dados e decidir qual botão apertar, meia entrada ou entrada inteira.

Mas sabemos que isso não nos ajudaria muito, então existe como indicarmos na programação se o código deve seguir por um caminho ou outro.

Nós chamamos isso de ramificar o código, se a pessoa é estudante, aplique o desconto, se não é, cobre a entra inteira.

De inicio pode parecer simples, mas imagine que podem aparecer muitas e muitas variáveis, além até do que um ser humano poderia ser capaz de avaliar. A pessoa é aposentada? A pessoa tem um cupom? A pessoa comprou antecipado? A pessoa veio num dia de promoção? E tantas outras coisas que se faz necessário conseguir escrever tudo isso em código, e o computador poder analisar tudo isso pra nós;

Em javascript existe basicamente duas formas de indicar essa ramificação, veja o caso do [if...else](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Statements/if...else):

```js
  if (se a condição aqui for verdadeira) {
    //então faça o que estiver aqui
  } else if(se a condição anterior for falsa, mas essa verdadeira) {
    //então faça essa ao invés daquela
  } else {
   // para todas as outras condições execute o que estiver aqui
  }
```

Esse é o tradicional if...else if...else, em português serial algo como SE, SENÃO SE, SENÃO.

```
SE (o céu é azul) {
  então diga bom dia
} SENÃO SE (o céu tá nublado) {
  então acho que vai chover
} SENÃO {
  então não sei, deve ser noite talvez
}
```

Assim podemos especificar em quais CONDIÇÕES cada código deve ser executado.

Outra forma no javascript para poder fazer isso para muitas condições é o [switch](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Statements/switch), veja:

```js
const expr = 'Mamão';
switch (expr) {
  case 'Laranja':
    console.log('Laranja está por R$ 5,33');
    break;
  case 'Mamão Doce':
  case 'Mamão':
    console.log('Mamão está custando R$ 3,73'); // esse será executado
    break;
  default:
    console.log(`Desculpe, não temos ${expr}.`);
}

```

Nesse caso, podemos especificar infinitas possibilidades para os "case" (casos), sem precisar criar um ```if``` para cada um deles.

### Funções

Funções nada mais são do que blocos de código, o qual você dá um nome e pode chamar esse bloco a qualquer momento, sem ter que reescrever todo o bloco.

Imagine: Todo dia você faz arroz, você precisa fazer cada passo, escolher, lavar, temperar, colocar no fogo, esperar, servir. E se você pudesse só dizer "fazerArroz" e pronto, ele estaria ali na mesa prontinho?

Funções são tarefas no código que usamos muitas vezes e por isso damos nomes a elas, para poder executar sempre que for necessário.

Agora num exemplo de código, te pediram para verificar se o usuário é adulto, tem cartão, tem passaporte, tem assinatura, mas essa verificação precisa ser feita em vários lugares no código, veja o que lhe parece mais apropriado:

```js
if(idade >=18 && assinatura && cartao && passaport) {
  // dar desconto
}

// ou isso

const usuarioLiberado = () = {
  return idade >=18 && assinatura && cartao && passaport
}

if (usuarioLiberado) { // fica melhor de entender e escrever
  //dar desconto
}

```

Agora imagine que o que faz o usuário ser liberado ou não fosse bem mais complicado que isso, imagine ter que copiar e colar em todos os ifs? Seria horrível e pior, se algo mudasse na lógica de liberação, você teria que ir em todos os locais do código e alterar cada if desse.

Funções são como tijolos na nossa construção, depois de construirmos os tijolos, não há necessidade de fazer outro, podemos usar esses tijolos para construir paredes, e depois usamos as paredes para construir casas, fica tudo mais fácil. Assim não precisamos fabricar cada tijolo da nossa casa ou reescrever o mesmo código na nossa aplicação.

Mas não é só isso, é ainda melhor!

Podemos escrever funções que agem diferente de acordo com o que recebem de argumentos, ou seja, o dados de entrada de uma função, veja:

```js
const calculaDiaDaSemana (dia) => {
  switch (dia) {
    case 1:
      console.log('Domingo);
      break;
    case 2:
      console.log('Segunda);
      break;
    case 3:
      console.log('Terça');
      break;
    case 4:
      console.log('Quarta');
      break;
    case 5:
      console.log('Quinta');
      break;
    case 6:
      console.log('Sexta');
      break;
    case 7:
      console.log('Sábado);
      break;
    default:
      console.log('Não sei esse dia');
  }
}

calculaDiaDaSemana(1); // irá imprimir Domingo
```

Nesse caso, a função também utiliza dentro dela um condicional, dessa forma, pode resultar numa resposta dependendo da entrada ```dia``` tornando ainda mais poderosas.

[Mais sobre funções](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Guide/Functions)

### Exercícios

* [Exercício para casa](/exercicios/para-casa/)

## Links Úteis

* [Documentação Javascript](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript)
* [JEP: explorador com exemplos](https://jep.vercel.app/)

## Links da prof

* [Todos os Links](https://giuzambot.bio.link/)
* [LinkedIn](https://www.linkedin.com/in/giuzambot/)
* [GitHub](https://github.com/giuzambot)

<center>

Desenvolvido com :purple_heart:

</center>
