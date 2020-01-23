function solve(arr){
    const result=[];
    arr.forEach((el,i) => {
        if (i%2!==0) {
           result.push(el*2) 
        }
    });
    console.log(result.reverse().join(' '));
}