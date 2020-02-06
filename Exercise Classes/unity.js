class Rat{
    name;
    unitedRats=[];

    constructor(name){
        this.name=name;
    }

    unite(otherRat){
        if (otherRat instanceof Rat) {
            this.unitedRats.push(otherRat);
        }
    }
    getRats(){
        return this.unitedRats;
    }
    toString(){
        return this.name + this.unitedRats.map(r=>`\n##${r.name}`).join('')
    }
}

let firstRat = new Rat("Peter");
console.log(firstRat.toString()); // Peter
 
console.log(firstRat.getRats()); // []

firstRat.unite(new Rat("George"));
firstRat.unite(new Rat("Alex"));
console.log(firstRat.getRats());
// [ Rat { name: 'George', unitedRats: [] },
//  Rat { name: 'Alex', unitedRats: [] } ]

console.log(firstRat.toString());
// Peter
// ##George
// ##Alex
