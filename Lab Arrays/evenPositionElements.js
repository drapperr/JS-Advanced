function solve(arr){
    const result=[];
    arr.forEach((el,i) => {
        if (i%2===0) {
            result.push(el);
        }
    });

    console.log(result.join(' '));
}