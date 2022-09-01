/*
   Create a function convert reais to dollars
   The value in reais must come in the first argument
   The quote of the day must come in the second argument
   ex: node .\03-funcoes.js 500 5.64
*/

//Don't worry about those three lines, we'll learn it next week.
//const myArgs = process.argv.slice(2);
//const myArgs1 = myArgs[0];
//const myArgs2 = myArgs[1];

const convertRealtoDolar = (reais, quotation) => { // It is mandatory to use this function with the parameters
  
  let dollars = reais / quotation
  console.log(`The amount of R$${reais.toFixed(2)} converted into US$ using the quotation of R$${quotation} is equivalent to US$ ${dollars.toFixed(2)}`)
 
 
  //console.log(reais, quotation);
}

convertRealToDollar(5000, 5)
//convertRealToDolar(myArgs1, myArgs2);