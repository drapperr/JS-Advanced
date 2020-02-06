class Extensible {
    id;
    constructor() {
        Extensible.prototype.id = Extensible.prototype.id === undefined ? 0 : Extensible.prototype.id+1;
        this.id=Extensible.prototype.id;
    }
    extend(template){
        Object.entries(template).forEach(([k,v]) => {
            if (typeof(v) ==='function') {
                Extensible.prototype[k]=v;
            }else{
                this[k]=v;
            }
        });
    }
}

let obj1 = new Extensible();
let obj2 = new Extensible();
let obj3 = new Extensible();
console.log(obj1.id);
console.log(obj2.id);
console.log(obj3.id);
var template = {
    extensionData: 5,
    extensionMethod: function (value) {
        return value + 1;
    }
};
obj1.extend(template);