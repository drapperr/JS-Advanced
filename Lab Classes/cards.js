let result=(function () {
    let Suits = {
        SPADES: '♠',
        HEARTS: '♥',
        DIAMONDS: '♦',
        CLUBS: '♣'
    }

    let validFaces=["2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K", "A"];

    class Card{
        innerFace;
        innerSuit;
        constructor(face,suit){
            this.face=face;
            this.suit=suit;
        }

        set suit(value){
            if (!Object.values(Suits).includes(value)) {
                throw new Error;
            }
            this.innerSuit=value;
        }
        get suit(){
            return this.innerSuit;
        }
        set face(value){
            if (!validFaces.includes(value.toString())) {
                throw new Error;
            }
            this.innerFace=value;
        }
        get face(){
            return this.innerFace;
        }
    }
    return {
        Suits: Suits,
        Card: Card
    }
}())

let Suits = result.Suits;
let Card = result.Card;

new Card("1",Suits.CLUBS);
new Card("2",Suits.Pesho);
new Card("3",'hearts');