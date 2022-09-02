/*
  O usuário a idade (lembre que ele vem tudo como string) e se é ou não estudante;
  Imprima que ele tem direito a meia entrada se for menor de idade ou estudante.
  ex: "Legal, você tem direito a meia entrada" ou "Que pena, você não tem esse direito"
*/


let ehEstudante = (estudante) => {
  if(estudante == "sim"){
    console.log("Você é estudante, parabéns. ")
    }else{
    console.log("Você não é mais estudante, ok. ")
  }
}

let idade = (numero) => {
  if(+numero >= 18){
    console.log("Você paga entrada inteira.")
    }else{
    console.log("Você paga meia entrada.")
  }
}


const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

readline.question('\nVocê é estudante? (Sim, Não)\n', estudante =>{
  ehEstudante(estudante);
  readline.question('\nQuando anos você tem?\n', numero => {
      idade(numero);
    
    //console.log(idade, estudante);
    readline.close();
  });
});

readline.on('close', () => {
  console.log('\nBom filme!');
  process.exit(0);
});
