/*
  Não altere nada no código, apenas adicione um valor a variável 'resposta'!
  Execute o código e veja se acertou no terminal
  ex: const resposta = 5;
*/
console.clear(); //Irá limpar o terminal para você
const resposta = 1; //insira o valor da final variável 'estudo' aqui
let estudo = 10;
const multiplicador = 2;

estudo = 1;
console.log(estudo)

estudo = multiplicador * estudo; // 2 * 1 = 2

console.log(estudo)


estudo = estudo * estudo / estudo; // (2 * 2) / 2 = 2
console.log(estudo)


estudo = estudo - multiplicador; // 2 - 2 = 0
console.log(estudo)


estudo += 2; // 0 + 2 = 2
console.log(estudo)


estudo /= 2; // 2 / 2 = 1
console.log(estudo) // aqui foi a minha ultima variavel de escopo global de valor 1 


{
  let estudo = 6; // só consigo acessar essa variavel aqui no escopo local 
  console.log(estudo)

}

if (estudo === resposta) {
  console.log("\nVocê acertou!\n");
} else {
  console.log("\nTente de novo!\n");
}

/*
  Você consegue justificar sua resposta?
  Comente o código como foi a manipulação dos valores
  ex:
  let estudo = 1 //aqui foi feita a atribuição no escopo global
*/
