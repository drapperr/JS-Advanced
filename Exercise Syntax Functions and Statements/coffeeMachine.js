function solve(arr) {
    let totalEarned=0;
    
    for (let i = 0; i < arr.length; i++) {
        let total=0;
        const elements = arr[i].split(', ');
        let coinsInserted = +elements[0];
        let typeOfDrink = elements[1];

        if (typeOfDrink === 'coffee') {
            let coffeeType=elements[2];

            if (coffeeType==='caffeine') {
                total=0.80;
            } else if(coffeeType==='decaf'){
                total=0.90;
            }

            if (elements.length === 5) {//+milk
                total+=0.10;
            }
        } else if (typeOfDrink === 'tea') {
            total=0.80;

            if (elements.length === 4) {//+milk
                total+=0.10;
            }
        }

        let sugar= +elements[elements.length-1];

        if (sugar!==0) {
            total+=0.10;
        }

        if (total<=coinsInserted) {
            console.log(`You ordered ${typeOfDrink}. Price: $${total.toFixed(2)} Change: $${(coinsInserted-total).toFixed(2)}`);
            totalEarned+=total;
        } else{
            console.log(`Not enough money for ${typeOfDrink}. Need $${(total-coinsInserted).toFixed(2)} more.`);
        }
    }

    console.log(`Income Report: $${totalEarned.toFixed(2)}`)
}

solve(['8.00, coffee, decaf, 4', '1.00, tea, 2'])