/*
  Não altere nada no código, apenas adicione um valor a variável 'resposta'!
  Execute o código e veja se acertou no terminal
  ex: const resposta = 5;
*/
console.clear(); //Irá limpar o terminal para você
const resposta = 0; //insira o valor da final variável 'estudo' aqui
let estudo;
const multiplicador = 2;

{//cridado escopo
  {
    {
      let estudo = 0; // criada variável estudo (filha) que recebe o valar de 0.
      {
        {
          let estudo = 7; // variavel estudo (filha), recebe valar de 7.
        }
        const estudo = 9; // nova variável estudo recebe valor de 9.
      }
    }
    const estudo = 6;//variável estudo recebe valor de 6.
  }
}//fim do escopo, valores das varaiáveis estudo dentro do escopo, possuem valores diferente a variável global.


// valor global da varivável estudo não foi alterada, por isso a condição a baixo é positiva.

if (estudo === resposta) {
  console.log("\nVocê acertou!\n");
} else {
  console.log("\nTente de novo!\n");
}


console.log(estudo);
/*
  Você consegue justificar sua resposta?
  Comente o código como foi a manipulação dos valores
  ex:
  let estudo = 1 //aqui foi feita a atribuição no escopo global
*/

