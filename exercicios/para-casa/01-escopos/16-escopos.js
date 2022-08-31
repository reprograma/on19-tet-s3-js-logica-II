/*
  Não altere nada no código, apenas adicione um valor a variável 'resposta'!
  Execute o código e veja se acertou no terminal
  ex: const resposta = 5;
*/
console.clear(); //Irá limpar o terminal para você
const resposta = 11; //insira o valor da final variável 'estudo' aqui
let estudo = 10;// DEFINIÇÃO DE VARIAVEL EM ESCOPO GLOBAL 
const multiplicador = 2;

if (estudo === 10) { 
  estudo = 10;
  if (estudo === 10) {
    estudo = 10;
    if (estudo === 10) {
      estudo = 10;
      if (estudo === 10) { // ULTIMA CONPARAÇÃO COM A VARIAVEL ESTUDO COM VALOR 10 SENDO VERDADEIRA 
        estudo = 11;  // VARIAVEL ESTUDO PASSOU A VALER 11
        if (estudo === 11) {
          estudo = 11;
          if (estudo === 11) {
            estudo = 11;
            if (estudo === 11) {// ULTIMA CONPARAÇÃO COM A VARIAVEL ESTUDO COM VALOR 11 SENDO VERDADEIRA 
              estudo = 11; // VARIAVEL ESTUDO PERMANECE SENDO 11 (REATRIBUIÇÃO FINAL 11)
              if (estudo !== 11) { // VARIAVEL ESTUDO NÃO É DIFERENTE DE 11, SENDO FALSO CONDICIONAL NÃO CONTINUA 
                estudo = 11;
                if (estudo === 11) {
                  estudo = 11;
                  if (estudo === 11) {
                    estudo = 11;
                    if (estudo === 11) {
                      estudo = 11;
                      if (estudo === 11) {
                        estudo = 11;
                        if (estudo === 11) {
                          estudo = 11;
                          if (estudo === 11) {
                            estudo = 15;
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
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

