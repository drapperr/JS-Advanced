var Warehouse = require('./Warehouse');
var assert = require('chai').assert;

describe('Warehouse', () => {
    describe('Constructor', () => {
        it('set warehouse', () => {
            let warehouse = new Warehouse(10);
            assert.equal(warehouse.capacity, 10);
            assert.equal(warehouse._capacity, 10);
            assert.deepEqual(warehouse.availableProducts, { 'Food': {}, 'Drink': {} })
        });
        it('throw error', () => {
            assert.throws(() => new Warehouse({}));
            assert.throws(() => new Warehouse(-1));
            assert.throws(() => new Warehouse(0));
        });
    });

    describe('addProduct', () => {
        let warehouse = new Warehouse(10);
        it('add products', () => {
            assert.equal(warehouse.addProduct('Food', 'Apple', 2), warehouse.availableProducts.Food);
            assert.equal(warehouse.availableProducts.Food.Apple, 2);
            assert.deepEqual(warehouse.availableProducts.Drink, {});
            assert.equal(warehouse.addProduct('Food', 'Apple', 3), warehouse.availableProducts.Food);
            assert.equal(warehouse.availableProducts.Food.Apple, 5);
            assert.deepEqual(warehouse.availableProducts.Drink, {});
            assert.equal(warehouse.addProduct('Drink', 'Soda', 5), warehouse.availableProducts.Drink);
            assert.equal(warehouse.availableProducts.Food.Apple, 5);
            assert.equal(warehouse.availableProducts.Drink.Soda, 5);
        });
        it('throw error', () => {
            assert.throws(() => warehouse.addProduct('Drink', 'Soda', 5));
        });
    });

    describe('orderProducts', () => {

        it('orderedProducts products', () => {
            let warehouse = new Warehouse(20);
            warehouse.availableProducts.Food = {
                fish: 4,
                apple: 10,
                bannana: 1,
                orange: 5
            };
            let expected = { bannana: 1, fish: 4, orange: 5, apple: 10 };

            assert.deepEqual(warehouse.orderProducts('Food'), expected);
            assert.deepEqual(warehouse.availableProducts.Food, expected);
        });
    });

    describe('occupiedCapacity', () => {

        it('return occupiedCapacity', () => {
            let warehouse = new Warehouse(20);
            assert.equal(warehouse.occupiedCapacity(), 0);
            warehouse.availableProducts.Food = {
                fish: 4,
                apple: 5,
            };
            warehouse.availableProducts.Drink = {
                Cola: 3,
                Soda: 1,
            };

            assert.equal(warehouse.occupiedCapacity(), 13);
        });
    });

    describe('revision', () => {

        it('revision', () => {
            let warehouse = new Warehouse(20);
            assert.equal(warehouse.revision(), 'The warehouse is empty');

            warehouse.availableProducts.Food = {
                fish: 4,
                apple: 5,
            };
            warehouse.availableProducts.Drink = {
                Cola: 3,
                Soda: 1,
            };

            let expected = "";
            for (let type of Object.keys(warehouse.availableProducts)) {
                expected += `Product type - [${type}]\n`;
                for (let product of Object.keys(warehouse.availableProducts[type])) {
                    expected += `- ${product} ${warehouse.availableProducts[type][product]}\n`;
                }
            }
            assert.equal(warehouse.revision(), expected.trim());
        });
    });

    describe('scrapeAProduct', () => {

        it('scrapeAProduct', () => {
            let warehouse = new Warehouse(20);
            assert.equal(warehouse.revision(), 'The warehouse is empty');

            warehouse.availableProducts.Food = {
                fish: 4,
                apple: 5,
            };
            warehouse.availableProducts.Drink = {
                Cola: 3,
                Soda: 1,
            };

            assert.deepEqual(warehouse.scrapeAProduct('fish', 3), { fish: 1, apple: 5 });
            assert.deepEqual(warehouse.scrapeAProduct('apple', 5), { fish: 1, apple: 0 });
            assert.deepEqual(warehouse.scrapeAProduct('Cola', 10), { Cola: 0, Soda: 1 });

            assert.deepEqual(warehouse.availableProducts.Food, {
                fish: 1,
                apple: 0,
            });
            assert.deepEqual(warehouse.availableProducts.Drink, {
                Cola: 0,
                Soda: 1,
            });
        });
        it('throw error', () => {
            let warehouse = new Warehouse(20);

            warehouse.availableProducts.Food = {
                fish: 4,
                apple: 5,
            };
            warehouse.availableProducts.Drink = {
                Cola: 3,
                Soda: 1,
            };

            assert.throws(() => warehouse.scrapeAProduct('manca', 5));
        });
    });
});