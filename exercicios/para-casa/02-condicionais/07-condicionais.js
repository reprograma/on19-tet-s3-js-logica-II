/*
  O usuário a idade (lembre que ele vem tudo como string) e se é ou não estudante;
  Imprima que ele tem direito a meia entrada se for menor de idade ou estudante.
  ex: "Legal, você tem direito a meia entrada" ou "Que pena, você não tem esse direito"
*/

const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

readline.question('\nQuando anos você tem?\n', idade => {
  readline.question('\nVocê é estudante? (Sim, Não)\n', estudante => {

    verificaEntrada(idade, estudante);

    readline.close();
  });
});

readline.on('close', () => {
  console.log('\nBom filme!');
  process.exit(0);
});

const verificaEntrada = (idade, estudante) => { // FUNÇÃO COM A CONDICIONAL SOLICITADA COM OS PARâMETROS DE IDADE E ESTUDANTE DADDAS PELO USUARIO
  if (+idade < 18 || estudante === "Sim") { // CONDIÇÃO: SE IDADE MENOR QUE 18 OU ESTUDANTE IGUAL A SIM ELE ESTA LEGIVEL A PAGAR MEIA ENTRADA
    console.log("\nOba! Você tem direito a meia entrada");
  } else {
    console.log("\nQue pena! Você paga entrada inteira");
  }
}