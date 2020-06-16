function solve(number,arr){
    let newArr=[];

    for (let i = 0; i < number; i++) {
        newArr[i]=arr[i];
    }
    newArr.reverse();
    console.log(newArr.join(' '));
}

solve(3, [10, 20, 30, 40, 50]);