class Library {
    constructor(libraryName){
        this.libraryName=libraryName;
        this.subscribers=[];
        this.subscriptionTypes={
            normal:libraryName.length,
            special:libraryName.length*2,
            vip:Number.MAX_SAFE_INTEGER
        }
    }

    subscribe(name, type){
        if (!Object.keys(this.subscriptionTypes).includes(type)) {
            throw new Error(`The type ${type} is invalid`)
        }

        let subscriber=this.subscribers.find(x=>x.name===name);

        if (!subscriber) {
            subscriber={
                name,
                type,
                books:[]
            }
            this.subscribers.push(subscriber);
        } else{
            subscriber.type=type;
        }

        return subscriber;
    }

    unsubscribe(name){
        let subscriber=this.subscribers.find(x=>x.name===name);

        if (!subscriber) {
            throw new Error(`There is no such subscriber as ${name}`)
        }
        let index=this.subscribers.indexOf(subscriber);
        this.subscribers.splice(index,1);

        return this.subscribers
    }

    receiveBook(subscriberName, bookTitle, bookAuthor){
        let subscriber=this.subscribers.find(x=>x.name===subscriberName);

        if (!subscriber) {
            throw new Error(`There is no such subscriber as ${subscriberName}`)
        }

        if (subscriber.books.length===this.subscriptionTypes[subscriber.type]) {
            throw new Error(`You have reached your subscription limit ${this.subscriptionTypes[subscriber.type]}!`)
        }

        subscriber.books.push({
            title: bookTitle,
            author: bookAuthor
        })

        return subscriber;
    }

    showInfo (){
        if (this.subscribers.length===0) {
            return `${this.libraryName} has no information about any subscribers`;
        }

        let result=[];

        this.subscribers.forEach(sub => {
            result.push(`Subscriber: ${sub.name}, Type: ${sub.type}`);
            let recievedBooks='Received books: '+sub.books.map(book=>`${book.title} by ${book.author}`).join(', ');
            result.push(recievedBooks);
        });

        return result.join('\n');
    }
}


let lib = new Library('L');

//act
lib.subscribe('Peter', 'normal');
lib.subscribe('John', 'special');
lib.subscribe('Josh','vip')

console.log(lib.subscribers);
let expectedSubscribers = [
    {name: 'Peter', type: 'normal', books: []},
    {name: 'John', type: 'special', books: []},
    {name: 'Josh', type: 'vip', books: []},
];

lib.receiveBook('John', 'A Song of Ice and Fire', 'George R. R. Martin');
lib.receiveBook('Peter', 'Lord of the rings', 'J. R. R. Tolkien');
lib.receiveBook('John', 'Harry Potter', 'J. K. Rowling');
lib.receiveBook('Josh', 'Graf Monte Cristo', 'Alexandre Dumas');
lib.receiveBook('Josh','Cromwell','Victor Hugo');
lib.receiveBook('Josh','Marie Tudor','Victor Hugo');
lib.receiveBook('Josh','Bug-Jargal','Victor Hugo');
lib.receiveBook('Josh','Les Orientales','Victor Hugo');
lib.receiveBook('Josh','Marion de Lorme','Victor Hugo');

console.log(lib.subscribers[0].books);
let expectedFirstSubBooks = [
  { title: 'Lord of the rings', author: 'J. R. R. Tolkien' }
];

console.log(lib.subscribers[1].books)
let expectedSecondSubBooks =  [
  { title: 'A Song of Ice and Fire', author: 'George R. R. Martin' },
  { title: 'Harry Potter', author: 'J. K. Rowling' }
];
console.log(lib.subscribers[2].books)
let expectedThirdSubBooks = [
  { title: 'Graf Monte Cristo', author: 'Alexandre Dumas' },
  { title: 'Cromwell', author: 'Victor Hugo' },
  { title: 'Marie Tudor', author: 'Victor Hugo' },
  { title: 'Bug-Jargal', author: 'Victor Hugo' },
  { title: 'Les Orientales', author: 'Victor Hugo' },
  { title: 'Marion de Lorme', author: 'Victor Hugo' }
];

console.log(lib.showInfo())
let expected = "Subscriber: Peter, Type: normal\nReceived books: Lord of the rings by J. R. R. Tolkien\nSubscriber: Josh, Type: vip\nReceived books: Graf Monte Cristo by Alexandre Dumas, Cromwell by Victor Hugo, Marie Tudor by Victor Hugo, Bug-Jargal by Victor Hugo, Les Orientales by Victor Hugo, Marion de Lorme by Victor Hugo\n";
