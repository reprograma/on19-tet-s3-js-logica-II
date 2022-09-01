/*
  O usuário a idade (lembre que ele vem tudo como string) e se é ou não estudante;
  Imprima que ele tem direito a meia entrada se for menor de idade ou estudante.
  ex: "Legal, você tem direito a meia entrada" ou "Que pena, você não tem esse direito"
*/

let valorIdade = 0;
let tipoPessoa = "";

const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

readline.question('\nQuando anos você tem?\n', idade => {
  readline.question('\nVocê é estudante? (Sim, Não)\n', estudante => {

    valorIdade = parseInt(idade);
    tipoPessoa = estudante;
    console.log(idade, estudante);

    readline.close();
  });
});

readline.on('close', () => {

  if(valorIdade < 18 || tipoPessoa == "Sim" ){ //verifica se né menor OU se é estudante
    console.log("Legal, você tem direito a meia entrada");
  }else{ //se não
    console.log("Que pena, você não tem esse direito");
  }

  console.log('\nBom filme!');
  process.exit(0);
});
