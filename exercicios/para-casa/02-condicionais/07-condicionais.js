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
    if(idade < 18 || estudante.toUpperCase === "Sim") { // condição adequada para contemplar ambos os casos. toUpperCase foi usado para validar dado na comparação. 
      console.log("HazÔ, você tem direito a meia entrada! Aproveite.")
    } else {
      console.log("Ops, você não tem mais o direito a meia entrada. Bem vinde ao mundo dos adultos, ou não! rsrs")
    }
    //console.log(idade, estudante);

    readline.close();
  });
});

readline.on('close', () => {
  console.log('\nBom filme!');
  process.exit(0);
});
