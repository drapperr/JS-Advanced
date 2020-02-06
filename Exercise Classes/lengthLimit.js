class Stringer{
    constructor(str,length){
        this.innerString =str;
        this.innerLength=length;
    }

    increase(length){
        this.innerLength+=length;
    }
    decrease(length){
        this.innerLength=Math.max(0,this.innerLength-length);
    }
    toString(){
        return this.innerString.slice(0,this.innerLength) + (this.innerLength>=this.innerString ? '' : '...');
    }
}

let test = new Stringer("Test", 5);
console.log(test.toString()); // Test

test.decrease(3);
console.log(test.toString()); // Te...

test.decrease(5);
console.log(test.toString()); // ...
