function solution() {
    const sections = document.querySelectorAll('section');
    const input = sections[0].querySelector('input');
    const addButton = sections[0].querySelector('button');
    const listOfGifts = sections[1].querySelector('ul');
    const listOfSends = sections[2].querySelector('ul');
    const listOfDiscardeds = sections[3].querySelector('ul');

    addButton.addEventListener('click', addGift);

    function addGift() {
        let newGift = createNewElent('li', input.value, null, 'gift');
        let sendButton = createNewElent('button', 'Send', 'sendButton');
        let discardButton = createNewElent('button', 'Discard', 'discardButton');

        sendButton.addEventListener('click', sendGift);
        discardButton.addEventListener('click', discardGift);

        addChildren(newGift, [sendButton, discardButton]);
        listOfGifts.appendChild(newGift);

        input.value = '';

        const result = Array.from(listOfGifts.children).sort((a, b) => a.innerHTML.localeCompare(b.innerHTML));
        listOfGifts.innerHTML = '';
        result.map(li => listOfGifts.appendChild(li));
    }

    function sendGift(e) {
        let currentGift = e.target.parentNode;
        currentGift.children[0].remove();
        currentGift.children[0].remove();
        listOfSends.appendChild(currentGift)
    }

    function discardGift(e) {
        let currentGift = e.target.parentNode;
        currentGift.children[0].remove();
        currentGift.children[0].remove();
        listOfDiscardeds.appendChild(currentGift)
    }

    function createNewElent(name, text, id, clas) {
        let el = document.createElement(name);

        if (text) {
            el.textContent = text;
        }

        if (id) {
            el.id = id;
        }

        if (clas) {
            el.classList.add(clas);
        }

        return el;
    }

    function addChildren(el, clidren) {
        clidren.forEach(child => {
            el.appendChild(child);
        });
    }
}