function calculateLowestPrices(arr) {
    const products = {};

    for (const token of arr) {
        const parts = token.split(' | ');
        let town = parts[0];
        let product = parts[1];
        let price =  +parts[2];

        if (!Object.keys(products).some(x => x == product)) {
            products[product] = [price, town];
        } else if (products[product][0] > price) {
            if (products[product][1] == town) {
                products[product] = [price, town];
            }
        }
    }

    for (const product in products) {
        console.log(`${product} -> ${products[product][0]} (${products[product][1]})`)
    }
}

calculateLowestPrices([
    'Sofia City | Audi | 100000',
    'Sofia City | BMW | 100000',
    'Sofia City | Mitsubishi | 10000',
    'Sofia City | Mercedes | 10000',
    'Sofia City | NoOffenseToCarLovers | 0',
    'Mexico City | Audi | 1000',
    'Mexico City | BMW | 99999',
    'New York City | Mitsubishi | 10000',
    'New York City | Mitsubishi | 1000',
    'Mexico City | Audi | 100000',
    'Washington City | Mercedes | 1000])'])