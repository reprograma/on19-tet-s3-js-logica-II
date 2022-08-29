/*
  Não altere nada no código, apenas adicione um valor a variável 'resposta'!
  Execute o código e veja se acertou no terminal
  ex: const resposta = 5;
*/
console.clear(); //Irá limpar o terminal para você
const resposta = 35; //insira o valor da final variável 'estudo' aqui
let estudo = 10; //inicialmente declarada com let e inicializada com o valor 10.
const multiplicador = 2;

// as condições (estudo === 10) e (estudo === 20) são verdadeiras. Deste modo ele entra nos dois ifs, 
// recebendo primeiro o valor de 20 e depois o valor de 35. else não se aplica. 

if (estudo === 10) {
  estudo = 20;
  if (estudo === 20) {
    estudo = 35;
  } else {
    estudo = 14;
  }
}

// estudo aqui possui valor de 35. 

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
