class Kitchen {
    menu = {};
    productsInStock = {};
    actionsHistory = [];

    constructor(budget) {
        this.budget = +budget;
    }

    loadProducts(products) {
        products.forEach(p => {
            let args = p.split(' ');
            let productName = args[0];
            let productQuantity = +args[1];
            let productPrice = +args[2];

            if (productPrice <= this.budget) {
                this.budget -= productPrice;
                if (!this.productsInStock[productName]) {
                    this.productsInStock[productName] = 0;
                }
                this.productsInStock[productName] += productQuantity;
                this.actionsHistory.push(`Successfully loaded ${productQuantity} ${productName}`);
            } else {
                this.actionsHistory.push(`There was not enough money to load ${productQuantity} ${productName}`);
            }
        });
        return this.actionsHistory.join('\n');
    }

    addToMenu(meal, neededProducts, price) {
        if (this.menu[meal]) {
            return `The ${meal} is already in our menu, try something different.`;
        } else {
            this.menu[meal] = {};
            this.menu[meal].products = {};
            this.menu[meal].price = +price;
            neededProducts.forEach(element => {
                let args = element.split(' ');
                let productPrice = +args.pop();
                let productName = args.join(' ');
                this.menu[meal].products[productName] = productPrice;
            });
            return `Great idea! Now with the ${meal} we have ${Object.keys(this.menu).length} meals in the menu, other ideas?`;
        }
    }
    showTheMenu() {
        if (Object.keys(this.menu).length === 0) {
            return 'Our menu is not ready yet, please come later...';
        } else {
            let result = '';
            for (const key in this.menu) {
                result += `${key} - $ ${this.menu[key].price}\n`;
            }
            return result;
        }
    }

    makeTheOrder(meal) {
        if (!Object.keys(this.menu).includes(meal)) {
            return `There is not ${meal} yet in our menu, do you want to order something else?`;
        } else {
            let haveAllProducts = true;

            for (const key in this.menu[meal].products) {
                if (!this.productsInStock[meal] || this.menu[meal].products[key] > this.productsInStock[key]) {
                    haveAllProducts = false;
                    break;
                }
            }
            if (haveAllProducts) {
                for (const key in this.menu[meal].products) {
                    this.productsInStock[key] -= this.menu[meal].products[key];
                }
                this.budget += this.menu[meal].price;
                return `Your order (${meal}) will be completed in the next 30 minutes and will cost you ${this.menu[meal].price}.`;
            } else {
                return `For the time being, we cannot complete your order (${meal}), we are very sorry...`;
            }
        }
    }
}


let kitchen = new Kitchen(1000);
console.log(kitchen.loadProducts(['Banana 10 5', 'Banana 20 10', 'Strawberries 50 30', 'Yogurt 10 10', 'Yogurt 500 1500', 'Honey 5 50']));
console.log(kitchen.addToMenu('frozenYogurt', ['Yogurt 1', 'Honey 1', 'Banana 1', 'Strawberries 10'], 9.99));
console.log(kitchen.addToMenu('Pizza', ['Flour 0.5', 'Oil 0.2', 'Yeast 0.5', 'Salt 0.1', 'Sugar 0.1', 'Tomato sauce 0.5', 'Pepperoni 1', 'Cheese 1.5'], 15.55));
console.log(kitchen.addToMenu('Pizza', ['Flour 0.5', 'Oil 0.2', 'Yeast 0.5', 'Salt 0.1', 'Sugar 0.1', 'Tomato sauce 0.5', 'Pepperoni 1', 'Cheese 1.5'], 15.55));
console.log(kitchen.showTheMenu());