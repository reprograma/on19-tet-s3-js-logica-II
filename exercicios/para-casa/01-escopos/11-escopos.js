/*
  Não altere nada no código, apenas adicione um valor a variável 'resposta'!
  Execute o código e veja se acertou no terminal
  ex: const resposta = 5;
*/
console.clear(); //Irá limpar o terminal para você
const resposta = 44; //insira o valor da final variável 'estudo' aqui
let estudo = 10;
const multiplicador = 2;

const testar = (valor) => {
  if (valor === 5) {
    let estudo = 11;
  } else {
    estudo = 44;
  }
}

testar(7);
testar(5);

if (estudo === resposta) {
  console.log("\nVocê acertou!\n");
} else {
  console.log("\nTente de novo!\n");
}

/*
  Você consegue justificar sua resposta?
O testar com o nº 7 é false, então altera a variável para 44
*/

