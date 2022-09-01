/*
  Não altere nada no código, apenas adicione um valor a variável 'resposta'!
  Execute o código e veja se acertou no terminal
  ex: const resposta = 5;
*/
console.clear(); //Irá limpar o terminal para você
const resposta = 24; //insira o valor da final variável 'estudo' aqui
var estudo = 10;
const multiplicador = 2;

{
  estudo = 2;
  {
    estudo = 6;
    {
      estudo = 7;
      {
        var estudo = 24;
      }
    }
  }
}

if (estudo === resposta) {
  console.log("\nVocê acertou!\n");
} else {
  console.log("\nTente de novo!\n");
}

/*
  Você consegue justificar sua resposta?
  O variáveis criadas com o VAR podem ser acessadas em qualquer lugar do código,
  elas mudam independente de escopos
*/
