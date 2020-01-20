function solve(arr){
    arr=arr.flat();
    let max=arr.reduce((a,b)=> Math.max(a,b));

    console.log(max);
}