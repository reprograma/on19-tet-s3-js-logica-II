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
  readline.question('\nVocê é estudante? (1- Sim , 2- Não)\n', estudante => {
    advMeia(idade, estudante)
    //console.log(idade, estudante);

    readline.close();
  });
});

readline.on('close', () => {
  console.log('\nBom filme!');
  process.exit(0);
});

const advMeia = (idade, estudante) => { 
  if (+idade < 18  || estudante === "1" ){
    console.log('Você tem direito a meia entrada')
  }else {
    console.log('Você não tem direito a meia entrada')
  }
}
