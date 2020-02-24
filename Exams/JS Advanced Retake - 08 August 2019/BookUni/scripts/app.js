function solve() {
    const inputs = document.querySelectorAll('form input');
    const addBtn = document.querySelector('form button');
    const newBooks = document.querySelectorAll('.bookShelf')[1];
    const oldBooks = document.querySelectorAll('.bookShelf')[0];
    const totalProfit = document.querySelectorAll('h1')[1];
    let total = 0;

    addBtn.addEventListener('click', addBook);

    function addBook(e) {
        let bookName = inputs[0].value;
        let bookYear = inputs[1].value;
        let bookPrice = inputs[2].value;

        e.preventDefault();

        if (bookName === '' || bookYear === '' || bookPrice === '') {
            
            return;
        }

        bookYear = Number(bookYear);
        bookPrice = Number(bookYear);

        if (bookYear <=0 || bookPrice <=0) {
            
            return;
        }
        let newBook = document.createElement('div');
        newBook.classList.add('book');

        let paragraph = document.createElement('p');
        paragraph.textContent = `${bookName} [${bookYear}]`;

        newBook.appendChild(paragraph);

        if (bookYear >= 2000) {
            let buyButton = document.createElement('button');
            buyButton.textContent = `Buy it only for ${bookPrice.toFixed(2)} BGN`;
            buyButton.addEventListener('click', buyBook);

            let moveButton = document.createElement('button');
            moveButton.textContent = 'Move to old section';
            moveButton.addEventListener('click', moveBook);

            newBook.appendChild(buyButton);
            newBook.appendChild(moveButton);
            newBooks.appendChild(newBook);
        } else {
            bookPrice = bookPrice * 0.85;

            let buyButton = document.createElement('button');
            buyButton.textContent = `Buy it only for ${bookPrice.toFixed(2)} BGN`;
            buyButton.addEventListener('click', buyBook);

            newBook.appendChild(buyButton);
            oldBooks.appendChild(newBook);
        }
        clear()
    }

    function clear() {
        Array.from(inputs).forEach(input => input.value = '');
    }

    function buyBook(e) {
        let book = e.target.parentNode;
        let price = book.querySelector('button').textContent.split(' ')[4];
        total = Number(total) + Number(price);

        totalProfit.textContent = `Total Store Profit: ${total.toFixed(2)} BGN`;
        book.remove();
    }

    function moveBook(e) {
        let book = e.target.parentNode;
        book.children[2].remove();
        let buyButton = book.querySelector('button');
        let price = Number(buyButton.textContent.split(' ')[4]);
        let newPrice = (price * 0.85).toFixed(2);
        buyButton.textContent = `Buy it only for ${newPrice} BGN`;

        oldBooks.appendChild(book);
    }
}