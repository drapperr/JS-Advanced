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
let card = Card('J', 'D')
console.log(card.toString())