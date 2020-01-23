function solve(arr){
    arr.reverse().filter(x=>x<0).forEach(element => {
        console.log(element);
    });
    arr.reverse().filter(x=>x>=0).forEach(element => {
        console.log(element);
    });
}