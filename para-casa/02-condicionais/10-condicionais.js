/*
  Create a program that will receive a product value:
  10% discount for products over 100 reais
  20% discount for products over 500 reais
  Print on the screen what was the discount and the final value of the purchase
*/

const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

readline.question('\nHow much is the value to be calculated?\n', value => {

  value = +value
  let discount
  let priceWithDiscount = value - discount

  if(value < 500){
    discount = value * 0.2
    priceWithDiscount = value - discount
    console.log(`Congratulations, you received a 20% discount and will pay ${PriceWithDiscount} for this product`)
  } else if (value > 100){
    discount = value * 0.1
    priceWithDiscount1 = value - discount
    console.log(`Congratulations, you received a 10% discount and will pay ${PriceWithDiscount} for this product`)
  } else {
    console.log("Sorry. No discount. =/")
  }

  console.log(value);

  readline.close();
});

readline.on('close', () => {
  console.log('\nThank you for shopping with us!');
  process.exit(0);
});

//string value was converted to number, value quoted to apply the discounts correctly in each situation