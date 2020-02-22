function printDeckOfCards(cards) {
    let createdCards = [];

    function Card(face, suit) {
        validFaces = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
        validSuits = {
            S: '♠', H: '♥', D: '♦', C: '♣'
        }
    
        if (!this.validFaces.includes(face)) {
            throw new Error;
        }
        if (!Object.keys(this.validSuits).includes(suit)) {
            throw new Error;
        }
    
        function toString() {
            return face + validSuits[suit];
        }
        return{
            toString
        }
    }

    for (const card of cards) {
        let args = card.split('');
        let suit = args.pop();
        let face = args.join('');
        try {
            let newCard =Card(face, suit);
            createdCards.push(newCard.toString());
        }
        catch (Error) {
            console.log(`Invalid card: ${face + suit}`);
            return;
        }
    }
    console.log(createdCards.join(' '));
}


printDeckOfCards(['5S', '3D', 'QD', '1C'])
