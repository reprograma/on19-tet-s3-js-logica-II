/*
  Sem criar novos ifs ou elses e sem alterar o valor das variáveis,
  corrija as condições para atingir o resultado desejado!
  Deverá resultar em 'Você acertou' no terminal
*/
console.clear(); //Irá limpar o terminal para você

const resposta = 20;
const estudo = 10;

if (estudo !== resposta) { // mexa apenas aqui
  console.log("\nVocê acertou!\n");
} else {
  console.log("\nTente de novo!\n");
}

// Estudo é diferente de resposta, apesar de ser do mesmo tipo.
// Para cair no IF foi nescessário modificar o operador de comparação para estritamente não igual (!==)


/*
  Você consegue justificar sua resposta?
  Comente o código como foi a manipulação dos valores
  ex:
  if (estudo !== resposta) { //as variáveis devem ser diferentes para entrar no if
*/
