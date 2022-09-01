/*
  Não altere nada no código, apenas adicione um valor a variável 'resposta'!
  Execute o código e veja se acertou no terminal
  ex: const resposta = 5;
*/
console.clear(); //Irá limpar o terminal para você

//ESCOPO GLOBAL

const resposta = 4; //insira o valor da final variável 'estudo' aqui
let estudo = 10;
const multiplicador = 2;

estudo = 4; 

estudo = multiplicador * estudo; //2 * 4 = 8

estudo = estudo * estudo / estudo; // (8 * 8)/ 8 = 8

estudo = estudo - multiplicador;  //8 - 2 = 6

estudo += 2; // 6 + 2 = 8

estudo /= 2;  // 8/ 2 = 4
//console.log(estudo) ;

// ESCOPO LOCAL
{
  let estudo = 6; 
  

}

if (estudo === resposta) {
  console.log("\nVocê acertou!\n");
} else {
  console.log("\nTente de novo!\n");
}

/*
 CONCLUSÃO :
  ASSIM COMO NO EXERCÍCIO ANTERIOR A VARIAVÉL "estudo", RECEBEU VALORES 
  DIFERENTES DENTRO DE ESCOPO GLOBAL E LOCAL,  CONTUDO APENAS O QUE FOI DECLARADO NO ESCOPO GLOBAL SERIA A RESPOSTA CERTA
*/
