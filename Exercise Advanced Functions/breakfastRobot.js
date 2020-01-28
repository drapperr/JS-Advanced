()=>{
    let stock = {
        protein: 0,
        carbohydrate: 0,
        fat: 0,
        flavour: 0
    };

    let products = {
        apple: { carbohydrate : 1, flavour: 2 },
        lemonade: { carbohydrate: 10, flavour: 20 },
        burger: { carbohydrate: 5, fat: 7, flavour: 3 },
        eggs: { protein: 5, fat: 1, flavour: 1 },
        turkey: { protein: 10, carbohydrate: 10, fat: 10, flavour: 10 }
    }

    return function solve(input) {
        let commands = input.split(' ');
        let restock = '';
        if (commands[0] == 'restock') {
            stock[commands[1]] += Number(commands[2]);
            return 'Success';
        }
        else if (commands[0] == 'report') {
            return `protein=${stock.protein} carbohydrate=${stock.carbohydrate} fat=${stock.fat} flavour=${stock.flavour}`;

        }
        else if (commands[0] == 'prepare') {
            let product=checkIngredients(commands[1], commands[2]);
            if (product) {
                return `Error: not enough ${product} in stock`;
            } else {
                makeIngredients(commands[1], commands[2]);
                return 'Success';
            }
        }


        function checkIngredients(ingredients, quantity) {
            for (const key in products[ingredients]) {
                if (stock[key] < products[ingredients][key]*Number(quantity)) {
                    return key;
                }
            }
            return false;
        }

        function makeIngredients(ingredients, quantity) {
            for (const key in products[ingredients]) {
                stock[key] -= products[ingredients][key]*Number(quantity);
            }
        }
    }

};

let result = solution();
console.log(result('prepare turkey 1'))
console.log(result('restock protein 10'))
console.log(result('prepare turkey 1'))
console.log(result('restock carbohydrate 10'))
console.log(result('prepare turkey 1'))
console.log(result('restock fat 10'))
console.log(result('prepare turkey 1'))
console.log(result('restock flavour 10'))
console.log(result("prepare turkey 1"))
console.log(result("report"))


