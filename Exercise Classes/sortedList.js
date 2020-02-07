class List {
    elements = [];
    size;
    constructor() {
        this.size = 0;
    }
    add(elemenent) {
        this.elements.push(elemenent);
        this.elements.sort((a, b) => a - b);
        this.size++;
    }
    remove(index) {
        if (index >= this.size || index < 0) {
            throw new Error;
        }
        this.elements.splice(index, 1);
        this.size--;
    }
    get(index) {
        if (index >= this.size || index < 0) {
            throw new Error;
        }
        return this.elements[index];
    }
}

let list = new List();
list.add(5);
list.add(7);
list.add(6);
console.log(list.get(1));
list.remove(1);
console.log(list.get(1));
console.log(list.size)
console.log(list.hasOwnProperty('size'))