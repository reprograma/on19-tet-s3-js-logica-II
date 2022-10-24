/*
  O usuário enviar um número de 1 até 7
  Imprima qual dia da semana corresponde o número
  ex: 1 ==> domingo
*/
console.clear();
const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

readline.question(
  "\nDiga o número de 1 a sete e te direi o dia da semana!\n",
  (dia) => {
   

    if (+dia === 1) {
      console.log("Domingo");
    }
    if (+dia === 2) {
      console.log("Segunda");
    }
    if (+dia === 3) {
      console.log("Terça");
    }
    if (+dia === 4) {
      console.log("Quarta");
    }
    if (+dia === 5) {
      console.log("Quinta");
    }
    if (+dia === 6) {
      console.log("Sexta");
    }
    if (+dia === 7) {
      console.log("Sábado");
    }

    readline.close();
  }
);

readline.on("close", () => {
  console.log("\nTENHA UM DIA MARAVILHOSO!");
  process.exit(0);
});
