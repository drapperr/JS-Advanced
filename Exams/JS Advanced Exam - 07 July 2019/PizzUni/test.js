let PizzUni = require('./02. PizzUni_Ресурси');
let assert = require('chai').assert;

describe("PizzUni", function () {
    it("constructor", function () {
        let pizzUni = new PizzUni();

        assert.deepEqual(pizzUni.registeredUsers, []);
        assert.deepEqual(pizzUni.availableProducts, {
            pizzas: ['Italian Style', 'Barbeque Classic', 'Classic Margherita'],
            drinks: ['Coca-Cola', 'Fanta', 'Water']
        });
        assert.deepEqual(pizzUni.orders, []);
    });

    it("registerUser", function () {
        let pizzUni = new PizzUni();

        assert.deepEqual(pizzUni.registerUser('newEmail'), {
            email: 'newEmail',
            orderHistory: []
        });
        assert.deepEqual(pizzUni.registeredUsers, [{
            email: 'newEmail',
            orderHistory: []
        }]);

        assert.throws(() => pizzUni.registerUser('newEmail'), `This email address (newEmail) is already being used!`)
    });

    it("makeAnOrder", function () {
        let pizzUni = new PizzUni();

        assert.throws(() => pizzUni.makeAnOrder('email', 'Italian Style', 'Coca-Cola'), `You must be registered to make orders!`);

        pizzUni.registerUser('newEmail');

        assert.throws(() => pizzUni.makeAnOrder('newEmail', 'pizza', 'Coca-Cola'), 'You must order at least 1 Pizza to finish the order.');

        let expectedWithDrink = {
            orderedPizza: 'Italian Style',
            orderedDrink: 'Coca-Cola',
            email: 'newEmail',
            status: 'pending'
        };
        let expectedWithoutDrink = {
            orderedPizza: 'Italian Style',
            email: 'newEmail',
            status: 'pending'
        }

        assert.equal(pizzUni.makeAnOrder('newEmail', 'Italian Style', 'Coca-Cola'), 0);

        assert.deepEqual(pizzUni.orders[0], expectedWithDrink)
        assert.deepEqual(pizzUni.registeredUsers[0].orderHistory[0], {
            orderedPizza: 'Italian Style',
            orderedDrink: 'Coca-Cola'
        });

        assert.equal(pizzUni.makeAnOrder('newEmail', 'Italian Style', 'drink'), 1);

        assert.deepEqual(pizzUni.orders[1], expectedWithoutDrink)
        assert.deepEqual(pizzUni.registeredUsers[0].orderHistory[1], {
            orderedPizza: 'Italian Style',
        })
    });

    it("detailsAboutMyOrder", function () {
        let pizzUni = new PizzUni();
        pizzUni.registerUser('newEmail');
        pizzUni.makeAnOrder('newEmail', 'Italian Style', 'Coca-Cola');

        assert.equal(pizzUni.detailsAboutMyOrder(0),`Status of your order: pending`);

        pizzUni.completeOrder();
        assert.equal(pizzUni.detailsAboutMyOrder(0),`Status of your order: completed`);
    });

    it("doesTheUserExist", function () {
        let pizzUni = new PizzUni();
        pizzUni.registerUser('newEmail');
        
        assert.equal(pizzUni.doesTheUserExist('email'),null);
        assert.deepEqual(pizzUni.doesTheUserExist('newEmail'),pizzUni.registeredUsers[0]);
    });

    it("completeOrder", function () {
        let pizzUni = new PizzUni();
        pizzUni.registerUser('newEmail');
        pizzUni.makeAnOrder('newEmail', 'Italian Style', 'Coca-Cola');
        
        assert.equal(pizzUni.completeOrder(),pizzUni.orders[0]);
    });
});
