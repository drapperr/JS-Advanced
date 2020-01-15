function solve(a,b){
    while(b) {
        var t = b;
        b = a % b;
        a = t;
    }
    console.log(a);
}