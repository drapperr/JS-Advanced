var ChristmasMovies = require('./02. Christmas Movies_Resources');
var assert = require('chai').assert;

describe('ChristmasMovies', ()=> {
    describe('Instantiation ', ()=> {
        it('no parameters, and properties ', ()=> {
            let christmasMovies=new ChristmasMovies();
            assert.deepEqual(christmasMovies.movieCollection,[]);
            assert.deepEqual(christmasMovies.watched,{});
            assert.deepEqual(christmasMovies.actors,[]);
        });
    });

    describe('Method buyMovie', ()=> {
        it('add movie', ()=> {
            let christmasMovies=new ChristmasMovies;

            let expected=`You just got Home Alone to your collection in which Macaulay Culkin, Joe Pesci, Daniel Stern are taking part!`;

            assert.equal(christmasMovies.buyMovie('Home Alone', ['Macaulay Culkin', 'Joe Pesci','Joe Pesci', 'Daniel Stern']),expected);

            assert.deepEqual(christmasMovies.movieCollection, [{ name: 'Home Alone', actors: ['Macaulay Culkin', 'Joe Pesci', 'Daniel Stern'] }]);

            assert.throws(()=>christmasMovies.buyMovie('Home Alone', ['Daniel Stern']),`You already own Home Alone in your collection!`);
            
        });
    });

    describe('Method discardMovie', ()=> {
        it('discardMovie', ()=> {
            let christmasMovies=new ChristmasMovies;
            assert.throws(()=>christmasMovies.discardMovie('Home Alone'),`Home Alone is not at your collection!`);
            christmasMovies.buyMovie('Home Alone2', ['Macaulay Culkin']);
            assert.throws(()=>christmasMovies.discardMovie('Home Alone2'),`Home Alone2 is not watched!`);

            christmasMovies.buyMovie('Home Alone', ['Macaulay Culkin', 'Joe Pesci', 'Daniel Stern']);

            christmasMovies.watchMovie('Home Alone');
            let expected=`You just threw away Home Alone!`;
            assert.equal(christmasMovies.discardMovie('Home Alone'),expected);
            assert.deepEqual(christmasMovies.watched,{});
            assert.deepEqual(christmasMovies.movieCollection,[]);
        });
    });

    describe('Method watchMovie', ()=> {
        it('watchMovie', ()=> {
            let christmasMovies=new ChristmasMovies;
            christmasMovies.buyMovie('Home Alone', ['Macaulay Culkin', 'Joe Pesci', 'Daniel Stern']);
            christmasMovies.watchMovie('Home Alone');
            assert.equal(christmasMovies.watched['Home Alone'],1);
            christmasMovies.watchMovie('Home Alone');
            assert.equal(christmasMovies.watched['Home Alone'],2);

            assert.throws(()=>christmasMovies.watchMovie('Home Alone2'),'No such movie in your collection!');
            
        });
    });

    describe('Method favouriteMovie', ()=> {
        it('favouriteMovie', ()=> {
            let christmasMovies=new ChristmasMovies;
            christmasMovies.buyMovie('Home Alone', ['Macaulay Culkin', 'Joe Pesci', 'Daniel Stern']);
            christmasMovies.buyMovie('Home Alone2', ['Macaulay Culkin']);
            assert.throws(()=>christmasMovies.favouriteMovie(),'You have not watched a movie yet this year!');
            christmasMovies.watchMovie('Home Alone');
            christmasMovies.watchMovie('Home Alone');
            christmasMovies.watchMovie('Home Alone2');
            assert.equal(christmasMovies.favouriteMovie(),`Your favourite movie is Home Alone and you have watched it 2 times!`);
        });
    });

    describe('Method mostStarredActor', ()=> {
        it('mostStarredActor', ()=> {
            let christmasMovies=new ChristmasMovies;
            assert.throws(()=>christmasMovies.mostStarredActor(),'You have not watched a movie yet this year!');
            christmasMovies.buyMovie('Home Alone', ['Macaulay Culkin', 'Joe Pesci', 'Daniel Stern']);
            christmasMovies.buyMovie('Home Alone2', ['Macaulay Culkin']);
            assert.equal(christmasMovies.mostStarredActor(),`The most starred actor is Macaulay Culkin and starred in 2 movies!`);
        });
    });
});