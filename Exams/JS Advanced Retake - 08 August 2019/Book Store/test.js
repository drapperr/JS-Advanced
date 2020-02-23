var BookStore = require('./02. Book Store_Ресурси');
var assert = require('chai').assert;

describe("BookStore", function () {
    it("constructor", function () {
        let bookStore = new BookStore('MyName');

        assert.equal(bookStore.name, 'MyName');
        assert.deepEqual(bookStore.books, []);
        assert.deepEqual(bookStore._workers, []);
    });

    it("stockBooks", function () {
        let bookStore = new BookStore('MyName');
        let expected = [{ title: 'Book1', author: 'Author1' }, { title: 'Book2', author: 'Author2' }];

        assert.deepEqual(bookStore.stockBooks(['Book1-Author1', 'Book2-Author2']), expected);
        assert.deepEqual(bookStore.books, expected);
    });

    it("hire", function () {
        let bookStore = new BookStore('MyName');
        let expectedMessage = `person started work at MyName as position`;
        let expectedResult = [{
            name: 'person',
            position: 'position',
            booksSold: 0
        }]
        assert.deepEqual(bookStore.hire('person', 'position'), expectedMessage);
        assert.deepEqual(bookStore.workers, expectedResult);

        assert.throws(() => bookStore.hire('person', 'position'), 'This person is our employee');
    });

    it("fire", function () {
        let bookStore = new BookStore('MyName');
        assert.throws(()=>bookStore.fire('person'), `person doesn't work here`);

        bookStore.hire('person', 'position');
        assert.equal(bookStore.fire('person'), `person is fired`)
        assert.deepEqual(bookStore.workers, []);
    });

    it("sellBook", function () {
        let bookStore = new BookStore('MyName');
        bookStore.stockBooks(['Book1-Author1', 'Book2-Author2']);
        bookStore.hire('person', 'position');

        assert.throws(()=>bookStore.sellBook('Book3','person'),'This book is out of stock');
        assert.throws(()=>bookStore.sellBook('Book1','person2'),'person2 is not working here');

        bookStore.sellBook('Book1','person');
        bookStore.sellBook('Book2','person');

        assert.deepEqual(bookStore.books,[]);
        assert.deepEqual(bookStore.workers,[{
            name: 'person',
            position: 'position',
            booksSold: 2
        }])
    });

    it("printWorkers", function () {
        let bookStore = new BookStore('MyName');
        bookStore.stockBooks(['Book1-Author1', 'Book2-Author2','Book3-Author3']);
        bookStore.hire('person1', 'position1');
        bookStore.hire('person2', 'position2');
        bookStore.hire('person3', 'position3');

        bookStore.sellBook('Book1','person1');
        bookStore.sellBook('Book2','person1');
        bookStore.sellBook('Book3','person2');

        let expectedResult=`Name:person1 Position:position1 BooksSold:2\nName:person2 Position:position2 BooksSold:1\nName:person3 Position:position3 BooksSold:0`;

        assert.equal(bookStore.printWorkers(),expectedResult);
    });
});
