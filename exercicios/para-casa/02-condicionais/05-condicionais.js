/*
  O usuário enviar um número de 1 até 7
  Imprima qual dia da semana corresponde o número
  ex: 1 ==> domingo
*/

let escolheNumero = (semana) => {
if(semana == 1){
  console.log("Domingo")
  }else if (semana == 2){
    console.log("Segunda-feira")
    }else if(semana == 3){
      console.log("Terça-feira")
      }else if(semana == 4){
        console.log("Quarta-feira")
        }else if(semana == 5) {
          console.log("Quinta-feira")
            }else if(semana == 6){
              console.log("Sexta-feira")
              }else if (semana == 7){
                console.log("Sábado")
              }
          }       
          
   
 
const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

readline.question('\nDiga o número de 1 a sete e te direi o dia da semana!\n', semana => {
  console.log("O número digitado é par")
    readline.close();
});

readline.on('close', () => {
  console.log('\nObrigada por vir!');
  process.exit(0);
});
