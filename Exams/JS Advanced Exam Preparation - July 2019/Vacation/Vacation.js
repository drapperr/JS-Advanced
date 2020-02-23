class Vacation {
    children=0;

    constructor(organizer, destination, budget) {
        this.organizer = organizer;
        this.destination = destination;
        this.budget = budget;
        this.kids = {};
    }

    registerChild(name, grade, budget) {

        if (budget < this.budget) {
            return `${name}'s money is not enough to go on vacation to ${this.destination}.`;
        }

        if (!this.kids[grade]) {
            this.kids[grade] = [];
        }
        let child = this.kids[grade].find(x=>x.split('-')[0]===name);
        if (child) {
            return `${name} is already in the list for this ${this.destination} vacation.`;
        }

        this.kids[grade].push(`${name}-${budget}`);
        this.children++;

        return this.kids[grade];
    }

    removeChild(name, grade) {
        if (!this.kids[grade]) {
            return `We couldn't find ${name} in ${grade} grade.`;
        }

        let child = this.kids[grade].find(x=>x.split('-')[0]===name);

        if (!child) {
            return `We couldn't find ${name} in ${grade} grade.`;
        }

        this.kids[grade]= this.kids[grade].filter(x=>x!==child);
        this.children--;
        return this.kids[grade];
    }

    toString(){
        let result=[];
        result.push(`${this.organizer} will take ${this.children} children on trip to ${this.destination}\n`)
        let sortedKeys=Object.keys(this.kids).sort((a,b)=>a-b);

        sortedKeys.forEach(x=>{
            result.push(`Grade: ${x}\n`)
            for (let i = 0; i < this.kids[x].length; i++) {
                result.push(`${i+1}. ${this.kids[x][i]}\n`)
            }
        })

        return result.join('');
    }
}
let vacation = new Vacation('Miss. Elizabeth', 'The bahamas', 400);

vacation.registerChild('Gosho', 12, 3400);
vacation.registerChild('Gosho', 12, 5000);
vacation.registerChild('Pesho', 12, 400);
vacation.registerChild('Pesho', 12, 400);
vacation.registerChild('Skaro', 11, 400);
vacation.registerChild('Gosho', 11, 3444);

console.log(vacation.toString())
//("Miss. Elizabeth will take 4 children on trip to The bahamas\nGrade: 11\n1. Skaro-400\n2. Gosho-3444\nGrade: 12\n1. Gosho-3400\n2. Pesho-400\n");
