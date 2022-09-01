/*
  Não altere nada no código, apenas adicione um valor a variável 'resposta'!
  Execute o código e veja se acertou no terminal
  ex: const resposta = 5;
*/
console.clear(); //Irá limpar o terminal para você
const resposta = 24; //insira o valor da final variável 'estudo' aqui
var estudo = 10;// DEFINIÇÃO DE VARIAVEL EM ESCOPO GLOBAL 
const multiplicador = 2;

{
  estudo = 2;// ESTUDO PASSA A VALER 2
  {
    estudo = 6; // ESTUDO PASSA A VALER 6
    {
      estudo = 7; // ESTUDO PASSA A VALER 7
      {
        var estudo = 24; // VARIAVEIS VAR PODEM SER ATUALIZADAS E DECLARADAS NOVAMENTE ENTÃO AQUI PASSOU A SER 24 ( RESULTADO FINAL 24)
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
  Comente o código como foi a manipulação dos valores
  ex:
  let estudo = 1 //aqui foi feita a atribuição no escopo global
*/
