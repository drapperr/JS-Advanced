function solve(fruit,grams,priceForKg){
    let kg=grams/1000;
    let total=kg*priceForKg;
    console.log(`I need $${total.toFixed(2)} to buy ${kg.toFixed(2)} kilograms ${fruit}.`);
}