@@ -4,24 +4,25 @@
  ex: const resposta = 5;
*/
console.clear(); //Irá limpar o terminal para você
const resposta = 0; //insira o valor da final variável 'estudo' aqui
let estudo = 10;
const resposta = 6; //insira o valor da final variável 'estudo' aqui
let estudo = 10;  //inicialmente declarada com let e inicializada com o valor 10.
const multiplicador = 2;

estudo = 1;

// estudo reatribuído com valor 1
estudo = multiplicador * estudo;

// estudo atribuído com multiplicador 2 * 1 (estudo vale 2)
estudo = estudo * estudo / estudo;

// estudo reatribuído com 2 * 2 / 2 (estudo vale 2)
estudo = estudo - multiplicador;

// estudo 2 - 2 = (estudo vale 0)
estudo += 2;

// estudo recebe ele mesmo + 2 = (estudo vale 2)
estudo /= 2;

// estudo recebe ele mesmo divido por 2 = (estudo vale 1)
estudo = 6;

// estudo foi reatribuído = (estudo vale 6)
// variáveis declaradas com var e let permitem reatribuição de valores, sendo assim, estudo recebeu diversos valores ao longo do código.
if (estudo === resposta) {
  console.log("\nVocê acertou!\n");
} else {