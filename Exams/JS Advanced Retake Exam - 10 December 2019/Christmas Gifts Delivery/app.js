function solution() {
    let addBtn = document.querySelector('.card div button');
    let inputBox = document.querySelector('.card div input');
    let listOfGifts = document.querySelectorAll('.card')[1].querySelector('ul');
    let listOfSend = document.querySelectorAll('.card')[2].querySelector('ul');
    let listOfDiscardeds = document.querySelectorAll('.card')[3].querySelector('ul');

    addBtn.addEventListener('click', addGift);

    function addGift() {
        let newLi = document.createElement('li');
        newLi.classList.add('gift');
        newLi.innerHTML = inputBox.value;

        let sendBtn = document.createElement('button');
        sendBtn.id = 'sendButton';
        sendBtn.innerHTML = 'Send';
        sendBtn.addEventListener('click', sendItem);

        let discardBtn = document.createElement('button');
        discardBtn.id = 'discardButton';
        discardBtn.innerHTML = 'Discard';
        discardBtn.addEventListener('click', discardItem);

        newLi.appendChild(sendBtn);
        newLi.appendChild(discardBtn);

        listOfGifts.appendChild(newLi);

        sortList();

        inputBox.value = '';
    }

    function sendItem(e) {
        let newLi = document.createElement('li');
        newLi.classList.add('gift');
        newLi.innerHTML = e.target.parentNode.innerHTML;
        newLi.lastChild.remove();
        newLi.lastChild.remove();
        e.target.parentNode.remove();

        listOfSend.append(newLi);
    }

    function discardItem(e) {
        let newLi = document.createElement('li');
        newLi.classList.add('gift');
        newLi.innerHTML = e.target.parentNode.innerHTML;
        newLi.lastChild.remove();
        newLi.lastChild.remove();
        e.target.parentNode.remove();

        listOfDiscardeds.append(newLi);
    }

    function sortList() {
        const result = Array.from(listOfGifts.children).sort((a, b) => a.innerHTML.localeCompare(b.innerHTML));
        listOfGifts.innerHTML = '';
        result.map(li => listOfGifts.appendChild(li));
    }
}